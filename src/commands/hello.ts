import chalk from 'chalk';
import { ConsoleRouter, validator } from 'qoq';
import { consoleSlots } from '../bootstrap/consoleSlot';

export const router = new ConsoleRouter({
  slots: consoleSlots,
});

router
  .command('say:hello')
  .showInHelp()
  .docs({
    description: 'Say hello to every body',
  })
  .options({
    name: validator.string.default('World'),
    more: validator.boolean.optional(),
  })
  .alias({
    name: ['n'],
  })
  .action(async (ctx) => {
    console.log(chalk.green('\n[log] Hello ' + ctx.options.name + '\n'));

    if (ctx.options.more) {
      ctx.run('-h');
    }
  });
