export const collectIdsAndDocs = (doc) => ({ ...doc.data(), id: doc.id });

export const hasBlank = (data) => {
  console.log(data);
  const lengths = data.map((item) => item.length);
  return lengths.includes(0);
};

export const getBMI = (weight, height) => {
  let heightInCm = height * 0.01;
  let finalHeight = heightInCm * heightInCm;

  let bmi = weight / finalHeight;
  return bmi;
};

export const getIBW = (height, country) => {
  let ibw = height - 100;

  if (country === "PHL") {
    ibw = ibw * 0.9;
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
  let ibw = getIBW(Math.round(height), country);
  console.log("IBWWWW", ibw);

  let ter = ibw * getPAL(lifestyle);

  return parseInt(ter);
};

const getRice = (vegetable, fruit, milk, sugar, carbs) => {
  let fVegetable = vegetable * 3;
  let fFruit = fruit * 10;
  let fMilk = milk * 10;
  let fSugar = sugar * 5;

  let total = fVegetable + fFruit + fMilk + fSugar;
  let result = carbs - total;
  let rice = Math.round(result / 23);
  return rice;
};

const getMeat = (vegetable, milk, rice, protein) => {
  let fVegetable = vegetable * 1;
  let fMilk = milk * 10;
  let fRice = rice * 2;

  let total = fVegetable + fRice + fMilk;
  let result = protein - total;
  let meat = Math.round(result / 8);
  return meat;
};

const getFat = (milk, meat, fats) => {
  let fMilk = milk * 10;
  let fMeat = meat * 1;

  let total = fMeat + fMilk;
  let result = fats - total;
  let fat = Math.round(result / 5);
  return fat;
};

export const getExchanges = (height, country, lifestyle) => {
  let ter = getTER(height, country, lifestyle);
  console.log("TER", ter);
  let carbs = (ter * 0.55) / 4;
  let protein = (ter * 0.2) / 4;
  let fats = (ter * 0.25) / 9;

  let vegetable = 3;
  let fruit = 4;
  let milk = 1;
  let sugar = 3;

  let rice = getRice(vegetable, fruit, milk, sugar, carbs);
  let meat = getMeat(vegetable, milk, rice, protein);
  let fat = getFat(milk, meat, fats);

  let fVegetable = vegetable * 16;
  let fFruit = fruit * 40;
  let fMilk = milk * 170;
  let fRice = rice * 100;
  let fMeat = meat * 41;
  let fFat = fat * 45;
  let fSugar = sugar * 20;

  let exchanges = {
    vegetable,
    fruit,
    milk,
    sugar,
    rice,
    meat,
    fat,
  };

  let energy = {
    fVegetable,
    fFruit,
    fMilk,
    fRice,
    fMeat,
    fFat,
    fSugar,
  };
  return [exchanges, energy];
};
