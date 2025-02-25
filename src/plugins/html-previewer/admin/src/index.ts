import { getTranslation } from './utils/getTranslation';
import { PLUGIN_ID } from './pluginId';
import { Initializer } from './components/Initializer';
import { PluginIcon } from './components/PluginIcon';

export default {
  register(app: any) {
    // app.addMenuLink({
      // to: `plugins/${PLUGIN_ID}`,
      // icon: PluginIcon,
      // intlLabel: {
      //   id: `${PLUGIN_ID}.plugin.name`,
      //   defaultMessage: PLUGIN_ID,
      // },
      // Component: async () => {
      //   const { App } = await import('./pages/App');

      //   return App;
      // },
    // });

    app.registerPlugin({
      id: PLUGIN_ID,
      initializer: Initializer,
      isReady: false,
      name: PLUGIN_ID,
    });
    app.customFields.register({
      name: 'html-previewer',
      pluginId: PLUGIN_ID, // the custom field is created by a color-picker plugin
      type: 'string', // the color will be stored as a string
      intlLabel: {
        id: `${PLUGIN_ID}.previwer.label`,
        defaultMessage: 'Preview text',
      },
      intlDescription: {
        id: `${PLUGIN_ID}.preview.description`,
        defaultMessage: 'Select any color',
      },
      
      icon: PluginIcon, // don't forget to create/import your icon component
      components: {
        Input: async () => import(/* webpackChunkName: "input-component" */ './components/HtmlPreviewer'),
      },
      options: {
        /*
         Declare settings to be added to the "Advanced settings" section
         of the field in the Content-Type Builder
       */
        base: [
          {
            sectionTitle: {
              id: `${PLUGIN_ID}.preview.section.format`,
              defaultMessage: ' ', // Be more specific here
            },
            items: [
              {
                intlLabel: {
                  id: `${PLUGIN_ID}.preview.format.label`,
                  defaultMessage: 'Default Value',
                },
                name: 'options.default',
                type: 'string', // The type of the default value is a string (color)
                defaultValue: '', // Default to an empty string or null, or a color like "#000000"
              },
            ],
          },
        ],
      },
  
      attributes: { type: String, customField: String },
    });
  },

 

  async registerTrads({ locales }: { locales: string[] }) {
    return Promise.all(
      locales.map(async (locale) => {
        try {
          const { default: data } = await import(`./translations/${locale}.json`);

          return { data, locale };
        } catch {
          return { data: {}, locale };
        }
      })
    );
  },
};
