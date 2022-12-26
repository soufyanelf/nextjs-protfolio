import fs from "fs/promises";
import path from "path";
import * as matter from "gray-matter";

export const parse_YAML_file = async (file_name: string) => {
  try {
    const file_path = path.join(process.cwd(), "content", file_name);
    const data = matter.read(file_path);
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
