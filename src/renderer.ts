import {CardModules} from '../../src/common/types/plugins/modules';

const rendererModules: CardModules = [
  {
    id: 'lynxhub-module-template',
    title: 'Template Module',
    description: 'A boilerplate card module template.',
    installationType: 'git',
    uninstallType: 'removeFolder',
    type: 'others',
    arguments: {},
    methods: {},
  },
];

export default rendererModules;
