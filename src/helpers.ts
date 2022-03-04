import packageJson from '../package.json';
import { EventConstructor } from './types';

export const cloneEvent = <T extends Event = Event>(event: T): Event => {
    const constructor: EventConstructor = event.constructor as unknown as EventConstructor;

    return new constructor(event.type, event);
};

export const modInfo = (): void => {
    /* eslint no-console: 0 */
    console.info(
        `%c  BETTER-HOLD-ACTION  \n%c    Version ${packageJson.version}     `,
        'color: orange; font-weight: bold; background: black',
        'color: white; font-weight: bold; background: dimgray',
    );
};
