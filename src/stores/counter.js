import { defineStore } from "pinia";

export const usegetItemsStore = defineStore("getItems", {
  state: () => ({
    RandomMeal: [],
    SearchMeal: [],
    numberofM: 10,
    searhthemeal: "",
    alltheIngr: [],
    restoreitall: [],
    searchIngredient: "",
    alphabets: [],
    searchlettername: "",
    allthesearchletter: [],
    mealpagearray: [],
  }),
  actions: {
    // for home page
    async getRandomMeal() {
      await fetch("https://www.themealdb.com/api/json/v1/1/random.php")
        .then((response) => response.json())
        .then((data) => {
          const meal = data.meals[0];
          const mainobject = {
            img: meal.strMealThumb,
            title: meal.strMeal,
            detales: meal.strInstructions,
            youtubelike: meal.strYoutube,
            Ingredients: [this.fillitout(meal)],
            Measers: [this.fillitout2(meal)],
            Catigory: meal.strCategory,
            Area: meal.strArea,
            tags: meal.strTags,
          };
          this.RandomMeal.push(mainobject);
          return this.RandomMeal;
        })
        .catch((error) => {
          console.log("Error:", error);
        });
    },
    // for home page
    async getnumberofmeals() {
      this.RandomMeal = [];
      for (let i = 0; i < this.numberofM; i++) {
        await this.getRandomMeal();
      }
    },
    // for home page
    fillitout(smallm) {
      const Ingredients = [];
      for (let i = 1; i < 20; i++) {
        var changename = smallm[`strIngredient${i}`];
        Ingredients.push(changename);
      }
      return Ingredients.filter((n) => n);
    },
    fillitout2(smallm) {
      const measers = [];
      for (let i = 1; i < 20; i++) {
        var changename = smallm[`strMeasure${i}`];
        measers.push(changename);
      }
      return measers.filter((n) => n);
    },
    // for SearchByName page
    async getSearchMeal() {
      const searchQuery = this.searhthemeal;
      const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURIComponent(
        searchQuery
      )}`;
      await fetch(url)
        .then((response) => response.json())
        .then((data) => {
          this.SearchMeal = [];
          const meals = data.meals;
          if (meals) {
            for (let i = 0; i < meals.length; i++) {
              const meal = meals[i];
              const mainobject = {
                img: meal.strMealThumb,
                title: meal.strMeal,
                detales: meal.strInstructions,
                youtubelike: meal.strYoutube,
                Ingredients: [this.fillitout(meal)],
                Measers: [this.fillitout2(meal)],
                Catigory: meal.strCategory,
                Area: meal.strArea,
                tags: meal.strTags,
              };
              this.SearchMeal.push(mainobject);
            }
          } else {
            console.log("No meals found for the search query.");
          }
          return this.SearchMeal;
        })
        .catch((error) => {
          console.log("Error:", error);
        });
    },
    // for getIngredientsMeal page
    async getIngredientsMeal() {
      await fetch("https://www.themealdb.com/api/json/v1/1/list.php?i=list")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          this.alltheIngr = data.meals;
          this.restoreitall = data.meals;
          return this.alltheIngr;
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    },
    // for getIngredientsMeal page
    filtertheIng() {
      this.restoreitall = this.alltheIngr.filter((ingredient) => {
        return ingredient.strIngredient
          .toLowerCase()
          .startsWith(this.searchIngredient.toLowerCase());
      });
    },
    // for serachny letter page
    getletters() {
      this.alphabets = [];
      const Mainlettes = "abcdefghijklmnopqrstuvwxyz"
        .toLocaleUpperCase()
        .split("");
      Mainlettes.forEach((one) => {
        const letters = {
          name: one,
          isActive: false,
        };
        this.alphabets.push(letters);
      });
      return this.alphabets;
    },
    // for serachny letter page
    async searchbyletterfunc(item) {
      const url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${item}`;
      await fetch(url)
        .then((response) => response.json())
        .then((data) => {
          this.allthesearchletter = [];
          for (let i = 0; i < data.meals.length; i++) {
            const meal = data.meals[i];
            const mainobject = {
              img: meal.strMealThumb,
              title: meal.strMeal,
              detales: meal.strInstructions,
              youtubelike: meal.strYoutube,
              Ingredients: [this.fillitout(meal)],
              Measers: [this.fillitout2(meal)],
              Catigory: meal.strCategory,
              Area: meal.strArea,
              tags: meal.strTags,
            };
            this.allthesearchletter.push(mainobject);
          }
          return this.allthesearchletter;
        })
        .catch((error) => {
          console.error("Error fetching API:", error);
        });
    },
    fillthemeals(text) {
      this.mealpagearray = text;
    },
    deceasethewords(text) {
      const words = text.trim().split(" ");
      if (words.length > 30) {
        const truncatedText = words.slice(0, 30).join(" ") + "...";
        return truncatedText;
      }
      return text;
    },
  },
});
