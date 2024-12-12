import type { Schema, Struct } from '@strapi/strapi';

export interface AppEngagementLevel extends Struct.ComponentSchema {
  collectionName: 'components_app_engagement_levels';
  info: {
    description: '';
    displayName: 'engagementLevel';
  };
  attributes: {};
}

export interface AppLink extends Struct.ComponentSchema {
  collectionName: 'components_app_links';
  info: {
    displayName: 'link';
  };
  attributes: {
    background: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color-picker'>;
    color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color-picker'>;
  };
}

export interface ButtonVariantHover extends Struct.ComponentSchema {
  collectionName: 'components_button_variant_hovers';
  info: {
    displayName: 'hover';
  };
  attributes: {
    background: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color-picker'>;
    border: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color-picker'>;
    text: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color-picker'>;
  };
}

export interface EngagementLevel extends Struct.ComponentSchema {
  collectionName: 'components_engagement_levels';
  info: {
    displayName: 'level';
  };
  attributes: {
    color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color-picker'>;
  };
}

export interface FeaturesFeature extends Struct.ComponentSchema {
  collectionName: 'components_features_features';
  info: {
    description: '';
    displayName: 'Feature';
  };
  attributes: {
    display: Schema.Attribute.Boolean &
      Schema.Attribute.CustomField<'plugin::checkbox.checkbox'>;
    features: Schema.Attribute.Component<'features.section', true>;
    name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface FeaturesSection extends Struct.ComponentSchema {
  collectionName: 'components_features_sections';
  info: {
    description: '';
    displayName: 'Section';
  };
  attributes: {
    display: Schema.Attribute.Boolean &
      Schema.Attribute.CustomField<'plugin::checkbox.checkbox'>;
    name: Schema.Attribute.String;
    sections: Schema.Attribute.Component<'features.sub-section', true>;
  };
}

export interface FeaturesSubSection extends Struct.ComponentSchema {
  collectionName: 'components_features_sub_sections';
  info: {
    description: '';
    displayName: 'Sub-Section';
  };
  attributes: {
    columns: Schema.Attribute.Component<'shared.columns', true>;
    display: Schema.Attribute.Boolean &
      Schema.Attribute.CustomField<'plugin::checkbox.checkbox'>;
    name: Schema.Attribute.String;
  };
}

export interface LeadprofileNatureOfBusiness extends Struct.ComponentSchema {
  collectionName: 'components_leadprofile_nature_of_businesses';
  info: {
    displayName: 'natureOfBusiness';
  };
  attributes: {
    background: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color-picker'>;
  };
}

export interface SharedAreaGraph extends Struct.ComponentSchema {
  collectionName: 'components_shared_area_graphs';
  info: {
    displayName: 'areaGraph';
  };
  attributes: {
    colors: Schema.Attribute.Component<'shared.colors', true>;
  };
}

export interface SharedBenefitSections extends Struct.ComponentSchema {
  collectionName: 'components_shared_benefit_sections';
  info: {
    description: '';
    displayName: 'benefitSections';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
  };
}

export interface SharedBenefits extends Struct.ComponentSchema {
  collectionName: 'components_shared_benefits';
  info: {
    description: '';
    displayName: 'benefits';
  };
  attributes: {
    description: Schema.Attribute.Text;
    order: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          max: 100;
          min: 1;
        },
        number
      >;
    sectionDirection: Schema.Attribute.Enumeration<['row', 'column']>;
    sections: Schema.Attribute.Component<'shared.benefit-sections', true>;
    title: Schema.Attribute.String;
  };
}

export interface SharedButton extends Struct.ComponentSchema {
  collectionName: 'components_shared_buttons';
  info: {
    displayName: 'Button';
    icon: 'discuss';
  };
  attributes: {
    variants: Schema.Attribute.Component<'shared.variant', true>;
  };
}

export interface SharedCampaign extends Struct.ComponentSchema {
  collectionName: 'components_shared_campaigns';
  info: {
    displayName: 'campaign';
  };
  attributes: {
    campaign_and_content: Schema.Attribute.Boolean;
  };
}

export interface SharedColors extends Struct.ComponentSchema {
  collectionName: 'components_shared_colors';
  info: {
    description: '';
    displayName: 'colors';
    icon: 'brush';
  };
  attributes: {
    Colors: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color-picker'>;
  };
}

export interface SharedColumns extends Struct.ComponentSchema {
  collectionName: 'components_shared_columns';
  info: {
    displayName: 'columns';
  };
  attributes: {
    display: Schema.Attribute.Boolean &
      Schema.Attribute.CustomField<'plugin::checkbox.checkbox'>;
    name: Schema.Attribute.String;
  };
}

export interface SharedFeatureList extends Struct.ComponentSchema {
  collectionName: 'components_shared_feature_lists';
  info: {
    description: '';
    displayName: 'featureList';
  };
  attributes: {
    description: Schema.Attribute.Text;
    featureImage: Schema.Attribute.Media<'images' | 'files'>;
    link: Schema.Attribute.Component<'shared.link', false>;
    subTitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedFeatures extends Struct.ComponentSchema {
  collectionName: 'components_shared_features';
  info: {
    description: '';
    displayName: 'features';
  };
  attributes: {
    featureList: Schema.Attribute.Component<'shared.feature-list', true>;
    order: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          max: 100;
          min: 1;
        },
        number
      >;
  };
}

export interface SharedFooter extends Struct.ComponentSchema {
  collectionName: 'components_shared_footers';
  info: {
    description: '';
    displayName: 'footer';
  };
  attributes: {
    description: Schema.Attribute.Text;
    link: Schema.Attribute.Component<'shared.link', true>;
    logo: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedGeoMap extends Struct.ComponentSchema {
  collectionName: 'components_shared_geo_maps';
  info: {
    displayName: 'geoMap';
  };
  attributes: {
    colors: Schema.Attribute.Component<'shared.colors', true>;
  };
}

export interface SharedItemStyle extends Struct.ComponentSchema {
  collectionName: 'components_shared_item_styles';
  info: {
    displayName: 'itemStyle';
  };
  attributes: {
    colors: Schema.Attribute.Component<'shared.colors', true>;
  };
}

export interface SharedLableStyle extends Struct.ComponentSchema {
  collectionName: 'components_shared_lable_styles';
  info: {
    displayName: 'lableStyle';
  };
  attributes: {
    colors: Schema.Attribute.Component<'shared.colors', true>;
  };
}

export interface SharedLeadProfile extends Struct.ComponentSchema {
  collectionName: 'components_shared_lead_profiles';
  info: {
    displayName: 'leadProfile';
  };
  attributes: {
    natureOfBusniess: Schema.Attribute.Component<
      'leadprofile.nature-of-business',
      false
    >;
    segments: Schema.Attribute.Component<'shared.segments', false>;
  };
}

export interface SharedLineGraph extends Struct.ComponentSchema {
  collectionName: 'components_shared_line_graphs';
  info: {
    description: '';
    displayName: 'lineGraph';
    icon: '';
  };
  attributes: {
    areaGraph: Schema.Attribute.Component<'shared.area-graph', false>;
    itemStyle: Schema.Attribute.Component<'shared.item-style', false>;
    lableStyle: Schema.Attribute.Component<'shared.lable-style', false>;
    lineStyle: Schema.Attribute.Component<'shared.line-style', false>;
  };
}

export interface SharedLineStyle extends Struct.ComponentSchema {
  collectionName: 'components_shared_line_styles';
  info: {
    displayName: 'lineStyle';
  };
  attributes: {
    colors: Schema.Attribute.Component<'shared.colors', true>;
  };
}

export interface SharedLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_links';
  info: {
    description: '';
    displayName: 'link';
  };
  attributes: {
    insightsSection: Schema.Attribute.String;
    linkText: Schema.Attribute.String;
    redirectionUrl: Schema.Attribute.String;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedOrder extends Struct.ComponentSchema {
  collectionName: 'components_shared_orders';
  info: {
    displayName: 'order';
  };
  attributes: {};
}

export interface SharedPagination extends Struct.ComponentSchema {
  collectionName: 'components_shared_paginations';
  info: {
    displayName: 'pagination';
  };
  attributes: {
    background: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color-picker'>;
    color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color-picker'>;
  };
}

export interface SharedPieChart extends Struct.ComponentSchema {
  collectionName: 'components_shared_pie_charts';
  info: {
    displayName: 'pieChart';
  };
  attributes: {
    colors: Schema.Attribute.Component<'shared.colors', true>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSegments extends Struct.ComponentSchema {
  collectionName: 'components_shared_segments';
  info: {
    displayName: 'segments';
  };
  attributes: {
    background: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color-picker'>;
    chipBackground: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color-picker'>;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSidebar extends Struct.ComponentSchema {
  collectionName: 'components_shared_sidebars';
  info: {
    displayName: 'Sidebar';
  };
  attributes: {
    background: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color-picker'>;
    selectedBackground: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color-picker'>;
    selectedText: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color-picker'>;
    text: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color-picker'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface SharedStackedGraph extends Struct.ComponentSchema {
  collectionName: 'components_shared_stacked_graphs';
  info: {
    displayName: 'stackedGraph';
  };
  attributes: {
    colors: Schema.Attribute.Component<'shared.colors', true>;
  };
}

export interface SharedTable extends Struct.ComponentSchema {
  collectionName: 'components_shared_tables';
  info: {
    description: '';
    displayName: 'table';
  };
  attributes: {
    body: Schema.Attribute.Component<'table.header', false>;
    header: Schema.Attribute.Component<'table.header', false>;
  };
}

export interface SharedTest extends Struct.ComponentSchema {
  collectionName: 'components_shared_tests';
  info: {
    displayName: 'test';
  };
  attributes: {
    test: Schema.Attribute.String;
  };
}

export interface SharedTheme extends Struct.ComponentSchema {
  collectionName: 'components_shared_themes';
  info: {
    description: '';
    displayName: 'theme';
  };
  attributes: {
    backgroundColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color-picker'>;
    buttonColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color-picker'>;
    cover: Schema.Attribute.Media<'images'>;
    linkColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color-picker'>;
    textColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color-picker'>;
    themeColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color-picker'>;
    widgetColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color-picker'>;
  };
}

export interface SharedVariant extends Struct.ComponentSchema {
  collectionName: 'components_shared_variants';
  info: {
    displayName: 'variant';
  };
  attributes: {
    active: Schema.Attribute.Component<'button-variant.hover', false>;
    background: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color-picker'>;
    border: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color-picker'>;
    hover: Schema.Attribute.Component<'button-variant.hover', false>;
    text: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color-picker'>;
  };
}

export interface TableBody extends Struct.ComponentSchema {
  collectionName: 'components_table_bodies';
  info: {
    displayName: 'body';
  };
  attributes: {};
}

export interface TableHeader extends Struct.ComponentSchema {
  collectionName: 'components_table_headers';
  info: {
    description: '';
    displayName: 'header';
  };
  attributes: {
    background: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color-picker'>;
    border: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color-picker'>;
    hover: Schema.Attribute.Component<'table.hover', false>;
  };
}

export interface TableHover extends Struct.ComponentSchema {
  collectionName: 'components_table_hovers';
  info: {
    displayName: 'hover';
  };
  attributes: {
    background: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color-picker'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'app.engagement-level': AppEngagementLevel;
      'app.link': AppLink;
      'button-variant.hover': ButtonVariantHover;
      'engagement.level': EngagementLevel;
      'features.feature': FeaturesFeature;
      'features.section': FeaturesSection;
      'features.sub-section': FeaturesSubSection;
      'leadprofile.nature-of-business': LeadprofileNatureOfBusiness;
      'shared.area-graph': SharedAreaGraph;
      'shared.benefit-sections': SharedBenefitSections;
      'shared.benefits': SharedBenefits;
      'shared.button': SharedButton;
      'shared.campaign': SharedCampaign;
      'shared.colors': SharedColors;
      'shared.columns': SharedColumns;
      'shared.feature-list': SharedFeatureList;
      'shared.features': SharedFeatures;
      'shared.footer': SharedFooter;
      'shared.geo-map': SharedGeoMap;
      'shared.item-style': SharedItemStyle;
      'shared.lable-style': SharedLableStyle;
      'shared.lead-profile': SharedLeadProfile;
      'shared.line-graph': SharedLineGraph;
      'shared.line-style': SharedLineStyle;
      'shared.link': SharedLink;
      'shared.media': SharedMedia;
      'shared.order': SharedOrder;
      'shared.pagination': SharedPagination;
      'shared.pie-chart': SharedPieChart;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.segments': SharedSegments;
      'shared.seo': SharedSeo;
      'shared.sidebar': SharedSidebar;
      'shared.slider': SharedSlider;
      'shared.stacked-graph': SharedStackedGraph;
      'shared.table': SharedTable;
      'shared.test': SharedTest;
      'shared.theme': SharedTheme;
      'shared.variant': SharedVariant;
      'table.body': TableBody;
      'table.header': TableHeader;
      'table.hover': TableHover;
    }
  }
}
