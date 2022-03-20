const settings = {
  "name": "personal-portfolio",
  "state": {
    "frontity": {
      "url": "https://www.tristantornatore.fr/",
      "title": "Freelance Développeur Web | Wordpress | SEO | Google Ads",
      "description": "Création et refonte de site internet, j'accompagne mes clients dans leur projet wordpress/woocommerce tout en proposant la meilleure stratégie SEO & SEA. Découvrez mes projets."
    }
  },
  "packages": [
    {
      "name": "@frontity/mars-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "Home",
              "/"
            ],
            [
              "Nature",
              "/category/nature/"
            ],
            [
              "Travel",
              "/category/travel/"
            ],
            [
              "Japan",
              "/tag/japan/"
            ],
            [
              "About Us",
              "/about-us/"
            ]
          ],
          "featured": {
            "showOnList": false,
            "showOnPost": false
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "https://www.tristantornatore.fr/"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
