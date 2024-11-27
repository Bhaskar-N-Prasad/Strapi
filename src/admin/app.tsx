import type { StrapiApp } from '@strapi/strapi/admin';
import { unstable_useContentManagerContext as useCMEditViewDataManager  } from '@strapi/strapi/admin';

const previewContentTypes = ["login"];

const commonButtonStyles = {width: "100%",  padding: "7px 16px", color: "#fff", borderRadius: "4px", fontWeight: "700",}

const buttonVariants = {
  primary: { ...commonButtonStyles ,background: "#4945ff", cursor: 'pointer'},
  disabled: {...commonButtonStyles, background: "#9391ff"}
}

const PreviewButton = () => {
  const editView = useCMEditViewDataManager();
  const url = new URL(location.href);

  const queryParams = new URLSearchParams(url.search);

  const status = queryParams.get('status');

  const redirectToThePage = (id?: string) => {
    const documentId = id ? `?documentId=${editView.id}` : ``
    const prevIewUrl = `http://localhost:3000/login${documentId}`;
    window.open(prevIewUrl, "__blank__")
  }

  const handlePreview = ()=>{
    redirectToThePage(editView.id)
  }

  if(status === "published"){
    return <button style={buttonVariants.primary} onClick={() => redirectToThePage()}>
      Go to the Page
    </button>
  }
  

  return (  previewContentTypes.includes((editView.contentType?.apiID as string).toLowerCase()) && status !== 'published' ? 
    <button  onClick={handlePreview} disabled={editView.form.modified}  style={!editView.form.modified ? buttonVariants.primary : buttonVariants.disabled}>
      Preview
    </button> : null
  );
  };


export default {
  config: {
    locales: [
      // 'ar',
      // 'fr',
      // 'cs',
      // 'de',
      // 'dk',
      // 'es',
      // 'he',
      // 'id',
      // 'it',
      // 'ja',
      // 'ko',
      // 'ms',
      // 'nl',
      // 'no',
      // 'pl',
      // 'pt-BR',
      // 'pt',
      // 'ru',
      // 'sk',
      // 'sv',
      // 'th',
      // 'tr',
      // 'uk',
      // 'vi',
      // 'zh-Hans',
      // 'zh',
    ],
  },
  bootstrap(app: StrapiApp) {
    app.getPlugin('content-manager').injectComponent('editView', 'right-links', { name: 'my-compo', Component:PreviewButton })
  },
};
