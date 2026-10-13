# Ronin Security — Design Concepts

Three responsive concepts for Ronin Security Services (M) Sdn. Bhd.: Premium Corporate, Bold & Modern, and Clean & Professional.

## Preview locally

Run `python3 -m http.server 8080 --directory dist`, then open http://localhost:8080. All site paths support hosting in a subdirectory. No build step or dependencies are required.

## Structure

- `dist/index.html`: design comparison page
- `dist/designs/`: complete concept pages, credentials and newsletter
- `dist/assets/`: prepared website images and redacted documents
- `dist/premium.js`: service selectors, document viewer and demo enquiry form

## Current limitations

Enquiry forms are demonstrations only; they do not send or store submissions. Newsletter pages are readable articles, not an email subscription service.

Original client forms, account credentials and unredacted source documents are excluded. Previously redacted identifiers and watermarks remain in the published images. Company logos, photos and documents remain their owners’ property. The illustrative architecture image is credited in the site footer.

GitHub Pages preview: https://kjayamani96.github.io/ronin-security-design/

The `gh-pages` branch contains the deployed contents of `dist`. After changes, commit on `main`, then run `git subtree split --prefix dist -b pages-update` and `git push origin pages-update:gh-pages` to publish.
