import { fireEvent, LovelaceCard } from 'custom-card-helpers';
import { BetterHoldActionConfig } from './types';
import { cloneEvent } from './helpers';

const startEvents = ['touchstart', 'mousedown'];
const releaseEvents = ['touchend', 'mouseup'];
const cancelEvents = ['touchcancel', 'mouseout', 'touchmove', 'mousewheel', 'wheel', 'scroll'];
const clickEvents = ['click'];

export class BetterHoldAction {
    private readonly card: LovelaceCard;
    private readonly timeoutDelay: number;
    private readonly interceptor: HTMLDivElement;
    private capturedDownEvent?: Event;
    private timeoutID: number | null = null;
    private actionTriggered = false;

    constructor(card: LovelaceCard, config: BetterHoldActionConfig) {
        this.card = card;
        this.timeoutDelay = config.delay ?? 1000;

        this.interceptor = document.createElement('div');
        this.interceptor.setAttribute('id', 'better-hold-action-interceptor');
        this.interceptor.setAttribute(
            'style',
            'position: absolute; top:0; left:0; bottom: 0; right: 0; overflow: visible;',
        );
        this.card.appendChild(this.interceptor);

        startEvents.forEach((eventName) => {
            this.interceptor.addEventListener(eventName, this.downEvent.bind(this), { passive: false, capture: true });
        });
        releaseEvents.forEach((eventName) => {
            this.interceptor.addEventListener(eventName, this.upEvent.bind(this), { passive: false, capture: true });
        });
        clickEvents.forEach((eventName) => {
            this.interceptor.addEventListener(eventName, this.clickEvent.bind(this), { passive: false, capture: true });
        });
        cancelEvents.forEach((eventName) => {
            this.interceptor.addEventListener(eventName, this.cancelEvent.bind(this), {
                passive: false,
                capture: true,
            });
        });
    }

    private downEvent(event: Event) {
        event.preventDefault();
        event.stopPropagation();
        this.actionTriggered = false;

        this.capturedDownEvent = cloneEvent(event);
        this.card.parentElement?.dispatchEvent(cloneEvent(event));

        this.timeoutID = window.setTimeout(this.fireHoldAction.bind(this), this.timeoutDelay);
    }

    private upEvent(event: Event) {
        event.preventDefault();
        event.stopPropagation();

        if (this.timeoutID && this.capturedDownEvent) {
            window.clearTimeout(this.timeoutID);
            this.timeoutID = null;
            this.card.dispatchEvent(this.capturedDownEvent);
        }
        this.card.dispatchEvent(cloneEvent(event));
    }

    private cancelEvent() {
        if (this.timeoutID) {
            window.clearTimeout(this.timeoutID);
        }
        this.timeoutID = null;
    }

    private clickEvent(event: Event) {
        if (this.actionTriggered) {
            event.preventDefault();
            event.stopPropagation();
        }
    }

    private fireHoldAction() {
        this.preventNextReleaseEvent();
        this.timeoutID = null;
        this.actionTriggered = true;

        fireEvent(this.card, 'action', { action: 'hold' });
    }

    private preventNextReleaseEvent() {
        const handleNext = (e: Event) => {
            e.preventDefault();
            e.stopPropagation();
            releaseEvents.forEach((eventName) => {
                document.removeEventListener(eventName, handleNext, true);
            });
        };

        releaseEvents.forEach((eventName) => {
            document.addEventListener(eventName, handleNext, { capture: true, passive: false });
        });
    }
}
