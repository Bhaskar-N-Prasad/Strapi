import type { Core } from '@strapi/strapi';
import EditView from "./plugins/custom-button/admin/src/components/EditView";


export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register( { strapi }: { strapi: Core.Strapi }) {
    // const plugin = strapi.plugin('content-manager');
    // console.log("stapie+++", plugin.contentType("login"));
    // plugin.register(() => {
    //   // Registering the custom EditView component with Strapi using TypeScript
    //   strapi.admin.addComponent('content-manager', 'edit-view', EditViewWithCustomButton);
    // });
  },

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap( { strapi }: { strapi: Core.Strapi } ) {
    // console.log(strapi, "strapie bootstrap...");
  },
};
