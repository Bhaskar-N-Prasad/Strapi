import type { StrapiApp } from '@strapi/strapi/admin';
import { unstable_useContentManagerContext as useCMEditViewDataManager  } from '@strapi/strapi/admin';
import { useMemo } from 'react';

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

  // function openHtmlInNewTab(htmlContent: string) {
    
  //   const blob = new Blob([htmlContent], { type: 'text/html' });
  //   const url = URL.createObjectURL(blob);
  
  //  window.open(url, "_blank");

  // }

  const handlePreview = ()=>{
    // if(editView.contentType?.apiID === "email-template"){
    //   openHtmlInNewTab(editView.form.values.body);
    // }
    // else{
      redirectToThePage(editView.id)

    // }
  }

  if(status === "published"){
    return <button style={buttonVariants.primary} onClick={() => redirectToThePage()}>
      Go to the Page
    </button>
  }

  const buttonDisbaled = useMemo(()=>{
    // if(editView.contentType?.apiID === "email-template"){
    //   return false;
    // }
    return editView.form.modified || !Object.keys(editView.form.values).length;
  }, [editView]);
  

  return (  previewContentTypes.includes((editView.contentType?.apiID as string).toLowerCase()) && status !== 'published' ? 
    <button  onClick={handlePreview} disabled={buttonDisbaled}  style={!buttonDisbaled ? buttonVariants.primary : buttonVariants.disabled}>
      Preview
    </button> : null
  );
};


export default {
  config: {
    locales: [
    ],
  },
  bootstrap(app: StrapiApp) {
    app.getPlugin('content-manager').injectComponent('editView', 'right-links', { name: 'my-compo', Component:PreviewButton })
  },
};
