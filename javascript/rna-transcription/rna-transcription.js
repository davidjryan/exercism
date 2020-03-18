let DnaTranscriber = function() {};

const dnaToRna = {
  G: "C",
  C: "G",
  T: "A",
  A: "U"
};

DnaTranscriber.prototype.toRna = function (dna) {

    DnaValidation(dna);

    const rna = dna.split('').map(c => dnaToRna[c]).join('');

    return rna;
}

const DnaValidation = dna => {

    if (!dna.match(/^[GCTA]+$/)) throw new Error("Invalid input");

}

module.exports = DnaTranscriber;