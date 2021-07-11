export const collectIdsAndDocs = (doc) => ({ ...doc.data(), id: doc.id });

export const getBMI = (weight, height) => {
  let heightInCm = height * 0.01;
  let finalHeight = heightInCm * heightInCm;

  let bmi = weight / finalHeight;
  return bmi;
};

export const getIBW = (height, country) => {
  let ibw = height - 100;

  if (country === "PHL") {
    let percentage = ibw * 0.9;
    ibw = ibw - percentage;
  }

  return ibw;
};

export const getPAL = (lifestyle) => {
  switch (lifestyle) {
    case "Sedentary":
      return 30;
    case "Lightly Active":
      return 35;
    case "Active":
      return 40;
    case "Very Active":
      return 45;
  }
};

export const getTER = (height, country, lifestyle) => {
  let ibw = getIBW(height, country);

  let ter = ibw * getPAL(lifestyle);

  return ter;
};
