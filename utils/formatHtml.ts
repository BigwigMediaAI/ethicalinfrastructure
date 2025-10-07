import prettier from "prettier/standalone";
import parserHtml from "prettier/plugins/html";

export const formatHtml = (html: string) => {
  return prettier.format(html, {
    parser: "html",
    plugins: [parserHtml],
  });
};
