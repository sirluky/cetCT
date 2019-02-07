/**
 *
 * @param {*} content html obsah, ktery jsme dostali z cms
 * @param {*} toDelete atributy, ktere chceme smazat
 */
function filterAtr(content, toDeletearr = ["srcset"]) {
  toDeletearr.forEach(toDelete => {
    let out = "";
    let toFind = toDelete + '="';
    let from = content.search(toFind);

    while (from >= 0) {
      let to =
        content
          .slice(from + toFind.length + 1, content.length - 1)
          .search('"') +
        from +
        toFind.length +
        2;
      out += content.slice(0, from);
      content = content.slice(to, content.length);
      from = content.search(toFind);
    }
    out += content;
    content = out;
  });

  return out;
}
module.exports = filterAtr;
