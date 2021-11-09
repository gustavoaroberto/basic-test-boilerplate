const iconDic = function (type, value) {
  const dic = {
    sun: {
      no: "no-sun",
      low: "low-sun",
      high: "high-sun",
    },
    water: {
      regularly: "three-drops",
      daily: "two-drops",
      rarely: "one-drop",
    },
  };

  if (type === "pets") {
    return value ? "toxic" : "pet";
  }

  return dic[type][value];
};

const Icon = function ({ icon }) {
  const node = document.createElement("i");
  node.classList.add("icon", icon);
  return node;
};

const Container = function ({ className, id }) {
  const node = document.createElement("div");
  className && node.classList.add(className);
  id && node.setAttribute("id", id);
  return node;
};

const Image = function ({ src, alt, className }) {
  const node = document.createElement("img");
  node.src = src;
  node.alt = alt;
  node.classList.add(className);
  return node;
};

const Title = function ({ content, className }) {
  const node = document.createElement("h6");
  node.textContent = content;
  className && node.classList.add(className);
  return node;
};

const Price = function ({ content, className }) {
  const node = document.createElement("p");
  node.textContent = content;
  className && node.classList.add(className);
  return node;
};

const Flag = function ({ content, className }) {
  const node = document.createElement("span");
  node.textContent = content;
  className && node.classList.add(className);
  return node;
};

window.Card = function Card({
  name,
  sun,
  water,
  url,
  price,
  toxicity,
  staff_favorite,
}) {
  const card = Container({
    className: "card",
    id: staff_favorite && "staff_favorite",
  });

  const image = Image({ src: url, alt: name });
  const imageContainer = Container({ className: "img-container" });
  const title = Title({ content: name });
  const genericContainer = Container({});
  const infoContainer = Container({ className: "container" });
  const priceTag = Price({ content: "$" + price });
  const iconContainer = Container({ className: "icon-container" });
  const iconSun = Icon({ icon: iconDic("sun", sun) });
  const iconWater = Icon({ icon: iconDic("water", water) });
  const iconToxicity = Icon({ icon: iconDic("pets", toxicity) });

  if (staff_favorite) {
    const flag = Flag({ content: "✨ Staff favorite" });
    infoContainer.append(flag);
  }

  imageContainer.appendChild(image);
  iconContainer.append(iconToxicity, iconSun, iconWater);
  infoContainer.append(priceTag, iconContainer);
  genericContainer.append(title, infoContainer);

  card.append(imageContainer, genericContainer);

  document.getElementById("card-container").append(card);

  return card;
};
