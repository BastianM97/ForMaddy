// Definición de la historia
const story = {
    start: {
        text: "Te encuentras caminado sin rumbo 🚶‍♂️‍➡️, con el sol brillando a través de los árboles, sin saber a ciencia cierta de donde vienes o a donde vas. De repente, frente a ti el camino se divide en dos. A la derecha un letrero con una flor 🌷, y a la izquierda un letrero con un árbol 🌲 ¿Qué haces?",
        choices: [
            { text: "Eliges la 🌷", next: "flores" },
            { text: "Eliges el 🌲", next: "bosque" }
        ]
    },
    flores: {
        text: "Entras por el camino de la derecha y terminas en un claro lleno de flores, todas ellas de una bellesa inigualable, con muchos colores y olores 😲. Caminas sin mucho interes hasta que te fijas en una flor 🌷, un poco distinta a las demás. ¿Que haces?",
        choices: [
            { text: "Me llevo la flor 🌷", next: "muerteUno" },
            { text: "Contemplas la flor un rato pero no te la llevas", next: "keepWalking" }
        ]
    },

    muerteUno: {
        text: `<p>Arrancas la flor y sigues caminando 🚶‍♂️‍➡️, disfruta de su enbriagante aroma que te hace ver el mundo de un rosa peculiar 🥰. Al principio huele delicioso, te hace feliz 🤩; pero poco a poco eso cambia, se vuelve desagradable, te empieza a doler 🤕. Resulta ser una flor venenosa. Mueres 💀</p>
        <div style="text-align: center;">
        <img src="Cottagecore Aesthetic.jpg" alt="Cadaver en un campo de flores" style="width:300px; height:auto;">
           </div>`,
        choices: [
            {text: "Reiniciar", next: "start"}
        ]
    },
    keepWalking: {
        text: `<p>Decides seguir caminando 🙂, disfrutas de la vista sin preocupaciones, pero sintiendo que te hace falta algo. De repente te encuentras un girasol gigante que te empieza a hablar 🌻. ¿Que haces?</p>
        <div style="text-align: center;">
        <img src="girasol.jpg" alt="Cadaver en un campo de flores" style="width:300px; height:auto;">
           </div>`,
        choices: [
            { text: "Lo ignoras y sigues caminando", next: "muerteDos"},
            { text: "Escuchas lo que te dice 🌻", next: "Revelacion"}
        ]
    },

    muerteDos: {
        text: `<p>El girasol traspasa tu pecho con un aguijón gigante, mueres. ¿Quien en su sano juicio le da la espalda a un girasol gigante que habla?</p>
        <div style="text-align: center;">
        <img src="mgirasol.jpg" alt="Cadaver en un campo de flores" style="width:300px; height:auto;">
           </div>`,
        choices: [
            {text: "Repetir", next: "start"}
        ]
    },




    bosque: {
        text: "Entras por el camino de la izquierda y terminas en un bosque de pinos altos 🌲. La atmosfera que te rodea te insita a la aventura 😎. Exploras cada rincón, disfrutas del canto de las aves y te diviertes persiguiendo ardillas. De repente, frente a ti aparece una cueva 😮. Tu instinto te grita que es mala idea entrar, pero otra parte de ti cree que lo puedes manejar 😎. ¿Que elijes?",
        choices: [
            { text: "Entras en busca de aventura 😎", next: "cueva" },
            { text: "No debe ser bueno, sigo caminando", next: "sabio" }
        ]
    },

    cueva: {
        text: `<p>Entras en la cueva y te encuentras con una estatua 🪆. Escuchas en el eco, que se repite la palabra "ámame". Entiendes que quiza aquí esté algún tesoro escondido 🪄, debe ser un acertijo. ¿Que haces?</p>
        <div style="text-align: center;">
            <img src="estatua.jpg" alt="Rostrodemujer" style="width:300px; height:auto;">
        </div>`,
        
        choices: [
            { text: "decides ignorar el eco", next: "Ignora"},
            { text: "decides darle un beso 😘", next: "finalmalo"}
        ]
    },
    Ignora: {
        text: "Algo en la forma de la estatua te da mala espina. Desprende un aura maligna 💀. no parece ser un tesoro, al contrario, parece ser una maldición. Empiezas a buscar la salida. 🤔 ¿Por donde vas?",
        choices: [
            { text: "Entras en otra cueva que parece estar en la misma dirección que entraste 🤔", next: "muerteTres"},
            { text: "Escoges otra cueva, opuesta a la dirección en la que entraste 🤔", next: "sabio"}
        ]
    },
   
   
    muerteTres: {
        text: `<p>Una bestia gigante estaba ocupando esa parte de la cueva, no le agrada tu visita.😨 
           Te agarra con sus enormes manos y te parte por la mitad, sin darte tiempo de huir. ☠️ Fin.</p>
           <div style="text-align: center;">
               <img src="qahmdf74.jpg" alt="Bestia gigante" style="width:300px; height:auto;">
           </div>`,
        choices: [
            { text: "Reintentar", next: "start"}
        ]
    },
    finalmalo: {
        text: `<p>En el momento en que besas la estatua esta cobra vida, te empieza a abrazar y a besar.😨 Pero tu solo sientes la frialdad de su piel hecha de piedra. Quieres irte pero no puedes.
           cada vez que te alejas sientes la necesidad de darle otro beso. Es una maldición, ahora estás condenado a besar aquella estatua por toda la eternidad ☠️ Fin.</p>
           <div style="text-align: center;">
               <img src="maldicion.jpg" alt="Hombre torturado" style="width:300px; height:auto;">
           </div>`,
        choices: [
            { text: "Despertar", next: "start"}
        ]
    },


    sabio: {
        text: `<p>Sigues caminando por el bosque 🚶‍♂️‍➡️, disfrutando del paisaje. De repente encuentras a un Sabio, te invita a comer con él y te dice que tiene algo importante que decirte. 😮 ¿Que haces?</p>
           <div style="text-align: center;">
               <img src="sabio.jpg" alt="Anciano" style="width:300px; height:auto;">
           </div>`,
        choices: [
            { text: "Te sientas con el y lo escuchas", next: "Revelacion"},
            { text: "Decides ignorarlo y seguir caminando", next: "Finalin"}
        ]
    },
    Finalin: {
        text: `<p>Sigues caminando, sin rumbo 🚶‍♂️‍➡️, conciente de que buscas algo que no encuentras, te pesa la idea de no haber escuchado al sabio. Ahora solo queda seguir caminando. Con la mente en blanco, te adentras tanto en el bosque que terminas perdiendote, para siempre. 🌳😞</p>
           <div style="text-align: center;">
               <img src="bosque.jpg" alt="bosque" style="width:300px; height:auto;">
           </div>`,
        choices: [
            { text: "Comienza de nuevo", next: "start"},
        ]
    },




    Revelacion: {
        text: "Te dice que, justo en la dirección que te indica, encontraras aquello que tanto estabas buscando, aquello que tu corazón más deseaba. 😮 ¿Que es lo que más deseas?",
        choices: [
            { text: "Diero", next: "final"},
            { text: "Paz", next: "finalbueno"},
            { text: "Amor", next: "amor"},
            { text: "Todo", next: "todo"}
        ]
    },
    final: {
        text: "No esperaba que escogieras esto, aunque reconozco que el dinero es importante, no es lo primero. Sea como fuere, te aseguro que no importa lo que escojas, nada te faltara conmigo. Ahora vuelve y escoge otra vez. Te amo ❤️",
        choices: [
            { text: "Reintentar", next: "Revelacion"}
        ]
    },
    finalbueno: {
        text: "Mi alma buscaba paz, una paz que solo podria encontrar junto a una princesa como tú. Mi mayor desseo, es amarte y tener una vida en paz a tu lado.",
        choices: [
        ]
    },
    amor: {
        text: `<p>El amor 🥰, el más grande e incomprensible de los sentimientos. Grande porque puede llegar a cubrir el mundo entero. E incomprensible porque, entre tanta inmensidad, pudo unir a dos personas, como tu y yo 🥰. Te amo ❤️.
        Nunca jamás hubiera imaginado llegar a sentir tanto por una mujer que no puedo tocar, pero que aún así, se las arreglo para meterse en mi cabeza y mi corazón ❤️. Pensar en que una cruceña me ama, y me lo demuestra a diario no tiene precio 😘. Me haces sentir afortunado de ser parte de tu mundo, mi chiquita preciosa 🥰.
        Este cuadro de dialogo se queda corto para alcanzar a expresar la inensidad de este amor que siento. Que me haces sentir. Aquí el merito es tuyo por corresponderme de forma tan especial y cariñosa 🥰. ¡Que locura amarte ❤️!, y a la vez... ¡Que felicidad amarte!❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️</p>
           <div style="text-align: center;">
               <img src="corazónfondo.jpg" alt="Corazón" style="width:300px; height:auto;">
           </div>`,
        choices: [
            { text: "😘", next: "start"}
        ],
    },
    todo: {
        text: "¡La abaricia rompió el saco!, eso dicen. Pero en este caso no es así. No hay nada de malo en querarlo todo. Y yo, quiero todo contigo. Hacer dinero juntos. Hacer al amor contigo, tanto en su significado más carnal, como en su significado más profundo y sentimental. ¡Todo!, reinventar el amor como lo conocen los demás, hasta llegar a una vida plena y en paz a tu lado, envegeciendo juntos, viendo a nuestros hijos crecer. La distancia es temporal, algo intrasendente, despues de todo no podia ser tan perfecto o el universo explotaria. Encontrarte se sintio como lo he narrado en esta hstoria, llena de infortunios y cosas raras. Y aún no llega a su fin. solo debemos seguir escogiendo las opciones correctas. Te amo, mi morena hermosa",
        choices: [
            { text: "Este juego es un poema para tí, juegalo siempre que quieras", next: "start"}
        ]
    },
};



function showStoryPart(part) {
    const storyText = document.getElementById("story");
    const choicesContainer = document.getElementById("choices");

    
    storyText.innerHTML = part.text;

   
    choicesContainer.innerHTML = "";

    
    part.choices.forEach(choice => {
        const button = document.createElement("button");
        button.innerText = choice.text;
        button.onclick = () => showStoryPart(story[choice.next]);
        choicesContainer.appendChild(button);
    });

}



showStoryPart(story.start);

