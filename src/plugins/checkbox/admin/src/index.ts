import { getTranslation } from './utils/getTranslation';
import { PLUGIN_ID } from './pluginId';
import { Initializer } from './components/Initializer';
import { PluginIcon } from './components/PluginIcon';

export default {
  register(app: any) {
    // app.addMenuLink({
    //   to: `plugins/${PLUGIN_ID}`,
    //   icon: PluginIcon,
    //   intlLabel: {
    //     id: `${PLUGIN_ID}.plugin.name`,
    //     defaultMessage: PLUGIN_ID,
    //   },
    //   Component: async () => {
    //     const { App } = await import('./pages/App');

    //     return App;
    //   },
    // });

    app.customFields.register({
      name: 'checkbox',
      pluginId: PLUGIN_ID, // the custom field is created by a color-picker plugin
      type: 'boolean', // the color will be stored as a string
      intlLabel: {
        id: `${PLUGIN_ID}.checkbox.label`,
        defaultMessage: 'Checkbox',
      },
      intlDescription: {
        id: `${PLUGIN_ID}.checkbox.description`,
        defaultMessage: 'Select checkbox',
      },
      icon: PluginIcon, // don't forget to create/import your icon component
      components: {
        Input: async () => import(/* webpackChunkName: "input-component" */ './components/Checkbox'),
      },
      options: {
        // declare options here
        base: [
          {
            sectionTitle: {
              id: `${PLUGIN_ID}.checkbox.section`, // unique id 
              defaultMessage: " ",
            },
            items: [
              // Add settings items to the section
              {
                /*
                  Add a "True or False" dropdown to choose either true or false.
                */
                intlLabel: {
                  id: `${PLUGIN_ID}.checkbox.section.format`,
                  defaultMessage: "Select Default value",
                },
                name: "options.default",
                type: "select",  // Use select to allow users to choose true or false
                defaultValue: true,  // Default selected value (true)
                options: [
                  {
                    key: 0,
                    value: true,  // true option
                    type:'boolean',
                    metadatas: {
                      intlLabel: {
                        id: `${PLUGIN_ID}.checkbox.section.format.true`,
                        defaultMessage: "True",
                      },
                    },
                  },
                  {
                    key: 1,
                    value: false,  // false option
                    type:"boolean",
                    metadatas: {
                      intlLabel: {
                        id: `${PLUGIN_ID}.checkbox.section.format.false`,
                        defaultMessage: "False",
                      },
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
      attributes: { type: String, customField: String },
    });
    app.registerPlugin({
      id: PLUGIN_ID,
      initializer: Initializer,
      isReady: false,
      name: PLUGIN_ID,
    });
  },

  async registerTrads(app: any) {
    const { locales } = app;

    const importedTranslations = await Promise.all(
      (locales as string[]).map((locale) => {
        return import(`./translations/${locale}.json`)
          .then(({ default: data }) => {
            return {
              data: getTranslation(data),
              locale,
            };
          })
          .catch(() => {
            return {
              data: {},
              locale,
            };
          });
      })
    );

    return importedTranslations;
  },
};
