class Cardnews extends HTMLElement{
    constructor(){
        super()

        const shadow = this.attachShadow({mode: "open"});
        shadow.appendChild(this.build())
        shadow.appendChild(this.styles())
    }

    build(){
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card");

        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "card__left");

        const autor = document.createElement("span");
        autor.textContent = "By " + (this.getAttribute("autor") || "Anonymous");

        const title = document.createElement("h1")
        title.textContent = this.getAttribute("title");

        const newsContent = document.createElement("p");
        newsContent.textContent = this.getAttribute("content");
        //linktitle.href = this.getAttribute("link-url");(Caso seja um link)

        cardLeft.appendChild(autor);
        cardLeft.appendChild(title);
        cardLeft.appendChild(newsContent);

        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "card__right");

        const newsImage = document.createElement("img");
        newsImage.setAttribute("class", "imagem");
        newsImage.src = this.getAttribute("photo") || "assets/foto-default.png";
        newsImage.alt = "Foto da notícia."

        cardRight.appendChild(newsImage);

        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);

        return componentRoot;
    }

    styles(){
        const style = document.createElement("style");
        style.textContent = `
        .card {
            width: 80%;
            background-color: white;
            box-shadow: 5px 5px 15px 2px rgba(0, 0, 0, 0.75);
            -moz-box-shadow: 5px 5px 15px 2px rgba(0, 0, 0, 0.75);
            -webkit-box-shadow: 5px 5px 15px 2px rgba(0, 0, 0, 0.75);
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }
        
        .card__left {
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding-left: 10px;
        }
        
        .card__left>h1 {
            margin-top: 15px;
            font-size: 25px;
        }
        
        .card__left>span {
            font-weight: 400;
        }
        
        .card__left>p {
            color: gray;
        }
        
        .imagem {
            max-width: 400px;
            max-height: 350px;
            width: auto;
            height: auto;
        }
        `

        return style;
    }
}

customElements.define("card-news", Cardnews);