import { TagSettings } from "./TagsTypes";
import { defaultTag } from "smrt-library/Utils/defaultValues";

// Lista com Nomes das Tags
type TagNames = "default";

export type TagList = {
  [k in TagNames]: TagSettings;
};

// Lista de Tags
const tagList: TagList = {
  default: defaultTag,
};

export default tagList;
export type { TagNames, TagSettings };
