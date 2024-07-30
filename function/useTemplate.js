import fs from "fs";

const readHTMLFile = (path, callback) => {
  fs.readFile(path, { encoding: "utf-8" }, (err, html) => {
    if (err) {
      callback(err);
    } else {
      callback(null, html);
    }
  });
};

const replacePlaceholders = (template, replacements) => {
  let output = template;
  for (const key in replacements) {
    const placeholder = `{{${key}}}`;
    output = output.replace(new RegExp(placeholder, "g"), replacements[key]);
  }
  return output;
};

export {readHTMLFile, replacePlaceholders}
