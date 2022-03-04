import { getLovelace } from 'custom-card-helpers';
import { BetterHoldAction } from './better-hold-action';
import { BetterHoldActionCard, ConfigHolder, Lovelace } from './types';
import { modInfo } from './helpers';

(async () => {
    const HaCard = await customElements.whenDefined('ha-card');
    if (HaCard) {
        const originalFirstUpdated = HaCard.prototype.firstUpdated;
        HaCard.prototype.firstUpdated = function (...e: unknown[]) {
            if (originalFirstUpdated) {
                originalFirstUpdated.call(this, ...e);
            }

            const lovelace: Lovelace | undefined = getLovelace();
            const host: ConfigHolder | undefined = this.getRootNode().host;

            const lovelaceConfig = lovelace?.config.better_hold_action;
            const cardConfig: BetterHoldActionCard | null = host?._config || null;

            if (lovelaceConfig && cardConfig) {
                const config = {
                    ...lovelaceConfig,
                    ...cardConfig,
                };

                if (
                    config &&
                    config.enabled &&
                    config.hold_action != undefined &&
                    config.hold_action.action &&
                    config.hold_action.action !== 'none'
                ) {
                    new BetterHoldAction(this, config);
                }
            }
        };
    }

    modInfo();
})();
