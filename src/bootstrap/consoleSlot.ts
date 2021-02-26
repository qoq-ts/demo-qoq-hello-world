import { ConsoleSlotManager, Tree } from 'qoq';
import { dbSlot } from './sequelize';

export const consoleSlots = ConsoleSlotManager.use(dbSlot);

Tree.setConsoleTrunk(consoleSlots);
