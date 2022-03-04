import { ActionConfig, LovelaceCardConfig, LovelaceConfig } from 'custom-card-helpers';

export interface BetterHoldActionConfig {
    enabled?: boolean;
    delay?: number;
}

export interface BetterHoldActionLovelaceConfig extends LovelaceConfig {
    better_hold_action?: BetterHoldActionConfig;
}

export interface Lovelace {
    config: BetterHoldActionLovelaceConfig;
    current_view: HTMLElement;
}

export interface ConfigHolder extends HTMLElement {
    _config?: BetterHoldActionCard;
}

export interface BetterHoldActionCard extends LovelaceCardConfig {
    better_hold_action?: BetterHoldActionConfig;
    hold_action?: ActionConfig;
}

export type EventConstructor = new (
    type: string,
    options: {
        bubbles: boolean;
        cancelable: boolean;
        composed: boolean;
    },
) => Event;
