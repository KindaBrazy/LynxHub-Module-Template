import {MainModules, MainModuleUtils} from '../../src/common/types/plugins/modules';

export default async function initialModule(utils: MainModuleUtils): Promise<MainModules[]> {
  return [
    {
      id: 'lynxhub-module-template',
      methods: () => ({
        // Define commands that execute when the launch button is clicked
        getRunCommands: async () => {
          return ['echo Hello from Template Module Backend!', 'pause'];
        },
        // Determine whether the card has already been installed
        isInstalled: async () => {
          return true;
        },
      }),
    },
  ];
}
