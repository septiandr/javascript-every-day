function hitungROAS(params) {
  const {
    hargaJual,
    hpp,
    adminPersen,
    profitPersen  // contoh: 20 untuk 20%
  } = params;

  // Hitung admin fee (rupiah)
  const adminFee = hargaJual * (adminPersen / 100);

  // Hitung margin kotor
  const marginKotor = hargaJual - hpp - adminFee;

  // Profit minimal (persen dari harga jual)
  const profitMinimal = hargaJual * (profitPersen / 100);

  // Biaya iklan maksimal
  const biayaIklanMaks = marginKotor - profitMinimal;

  // ROAS ideal
  const roasIdeal = hargaJual / biayaIklanMaks;

  // ROAS BEP
  const roasBEP = hargaJual / (hargaJual - hpp - adminFee);

  return {
    adminFee: Math.round(adminFee),
    marginKotor: Math.round(marginKotor),
    profitMinimal: Math.round(profitMinimal),
    biayaIklanMaks: Math.round(biayaIklanMaks),
    roasIdeal: Number(roasIdeal.toFixed(2)),
    roasBEP: Number(roasBEP.toFixed(2)),
  };
}

// === Contoh penggunaan ===
console.log(
  hitungROAS({
    hargaJual: 19850,
    hpp: 6000,
    adminPersen: 6.5,
    profitPersen: 20
  })
);
