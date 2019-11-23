export default function(doc) {
  if (doc.isBroken) {
    return "/not-found";
  }

  if (doc.type === "homepage") {
    return "/";
  }

  if (doc.type === "work-post") {
    return "/work/" + doc.uid;
  }

  return "/not-found";
}
