// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {

    const jobs = [
        { title: "Motion Graphic Designer", description: "Buscamos quien ocupe el rol de Multimedia Designer Jr. / Motion Graphic Designer tenga un perfil sumamente creativo, organizado y orientado a resultados, que posea una excelente capacidad de comunicación y trabajo en equipo." },
        {
            title: "Back End Developer", description: "Sumandote a Koibanx como Backend Developer vas a ser protagonista de una compañía que está creando historia construyendo los rieles transaccionales sobre blockchain para generar un sistema financiero más accesible, seguro y eficiente, siendo los habilitadores entre el mundo financiero tradicional y el mundo cripto."
        },
        { title: "Employee Communications & Engagement", description: "Serás responsable de la creación y ejecución del contenido de valor, divertido y creativo para nuestras comunicaciones internas y externas. Desarrollar la estrategia, narrativa y hoja de ruta de las comunicaciones (employee engagement)" },
        { title: "Project Analyst", description: "Se espera que pueda realizar la coordinación de equipos de trabajo para llevar adelante proyectos cumpliendo con el roadmap en tiempo y forma siendo el canal de comunicación entre el cliente y el equipo IT como así también el punto de contacto en la implementación de proyectos para resolver inconvenientes." },
        { title: "Semi Sr Infraestructura & Sre", description: "Formar parte de un equipo cross-funcional de arquitectos, ingenieros SRE y Seguridad Informática que trabajen de manera conjunta en la evolución y soporte de nuestras Plataformas." },
        { title: "Sr People Analyst", description: "Vas a liderar la estrategia de training con el fin de ayudar a los equipos a evolucionar de forma sostenible y trabajar junto con los líderes de área para identificar el talento de la organización y gestionar el desarrollo de las personas clave (top performers, líderes, etc)." }
    ];

    res.status(200).json(jobs)
}
