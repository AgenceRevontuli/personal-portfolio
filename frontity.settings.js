const settings = {
  "name": "personal-portfolio",
  "state": {
    "frontity": {
      "url": "https://www.tristantornatore.fr/",
      "title": "Freelance Développeur Front-End | Wordpress | SEO&SEA - Tristan Tornatore",
      "description": "Création et refonte de site web pour atteindre vos objectifs et faire des conversions sur le web. Disponible dès maintenant pour vos projets."
    }
  },
  "packages": [
    {
      "name": "@frontity/mars-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "Développement web",
              "/developpement-web/"
            ],
            [
              "Référencement naturel",
              "/referencement-naturel-seo/"
            ],
            [
              "Blog",
              "/astuces-digitales/"
            ],
            [
              "Me contacter",
              "/contacter-tristan-freelance-wordpress/"
            ],
          ],
          "featured": {
            "showOnList": true,
            "showOnPost": false
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "https://www.tristantornatore.fr/",
          "postTypes" : [
            {
            type: "projets",
            endpoint: "projets",
            archive: "/projets"
          },
          {
            type: "temoignages",
            endpoint: "temoignages",
            archive: "/temoignages"
          }
        ],
          postsPage: "/astuces-digitales/"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
    "@aamodtgroup/frontity-contact-form-7"
  ]
};

export default settings;
