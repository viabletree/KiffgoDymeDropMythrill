import _ from "lodash";

export function manipulatePageDetails(data) {
  console.log("daay", data);
  let pageDetailsObj = {};
  pageDetailsObj["id"] = data?.id ?? Math.random(10);
  pageDetailsObj["imagePreview"] =
    !_.isNil(data?.image) && !_.isEmpty(data?.image)
      ? data?.image
      : "https://i.ibb.co/4f9H947/Page-Image-Placeholder.png";
  pageDetailsObj["title"] = data?.title ?? "";
  pageDetailsObj["passenable"] = data?.passenable ?? false;
  pageDetailsObj["isDelete"] = data?.is_deleted ?? false;
  pageDetailsObj["description"] = data?.description ?? "";
  pageDetailsObj["contactOptions"] = data?.contact_buttons ?? {};
  pageDetailsObj["activations"] = data?.activation ?? [];

  pageDetailsObj["links"] =
    _.isNil(data?.links) || _.isEmpty(data?.links)
      ? []
      : manipulateLinksData(data?.links);

  pageDetailsObj["isActivePass"] = data?.perfect_pass ?? false;

  console.log(pageDetailsObj);

  return pageDetailsObj;
}

const manipulateLinksData = (list) => {
  let pageLinkList = [];
  console.log({});
  list.forEach((data, index) => {
    let pageLink = {};
    pageLink["id"] = data?.id ?? Math.random(10);
    pageLink["title"] = data?.title ?? "";
    pageLink["description"] = data?.description ?? "";
    pageLink["image"] =
      data?.thumbnail ??
      "https://dymedrop-dev.s3.amazonaws.com/f921c5cad73143a79357b32cfe36a1cb.png";
    pageLink["viewType"] =
      !_.isNil(data?.position) && !_.isEmpty(data?.position)
        ? data.show_thumbnail
          ? data?.position
          : "without_thumbnail"
        : "left";

    pageLink["actionTitle"] = data?.action?.text ?? "Go";
    pageLink["link"] = data?.action?.url ?? "https://fast.com/";
    pageLink["linkHeight"] = data?.link_height ?? 200;

    pageLinkList.push(pageLink);
  });
  console.log({pageLinkList});
  return pageLinkList;
};
