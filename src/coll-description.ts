import { css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { html as staticHtml, unsafeStatic } from "lit/static-html.js";
import { micromark } from "micromark";
import {
  gfmStrikethrough,
  gfmStrikethroughHtml,
} from "micromark-extension-gfm-strikethrough";

@customElement("wr-coll-description")
export class CollectionDescription extends LitElement {
  static styles = [
    css`
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        font-size: 1rem;
      }

      a {
        color: var(--link);
      }

      a:hover,
      a:active {
        text-decoration: none;
      }

      img {
        max-width: 100%;
      }

      p {
        line-height: inherit;
      }

      p:first-child {
        margin-top: 0;
      }

      p:last-child {
        margin-bottom: 0;
      }
    `,
  ];

  @property({ type: String })
  value = "";

  render() {
    return staticHtml`${unsafeStatic(
      micromark(this.value, {
        extensions: [gfmStrikethrough()],
        htmlExtensions: [gfmStrikethroughHtml()],
      }),
    )}`;
  }
}
