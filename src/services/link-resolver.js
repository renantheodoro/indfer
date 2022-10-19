export function linkResolver(document) {
    if (document.type === "products") {
      return "/produtos/" + document.uid;
    }
  
    return "/";
  }