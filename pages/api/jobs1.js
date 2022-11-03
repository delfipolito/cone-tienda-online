// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {

    const jobs = [
        {   title: "Project Analyst",
            lugar: "México - Uruguay - El Salvador",
            area:"PMO", publicado:"Octubre, 2022",
            workday:"Full Rime",
            description: "El equipo de Projects es el encargado de coordinar las tareas de los productos y módulos a generar por Producto/Core generando los roadmap correspondientes, registros en JIRA, midiendo la eficiencia y logrando proponer mejoras en los procesos.",
            resumen:"Sumándote a Koibanx como Project Analyst en nuestra sede en Ciudad de México, Montevideo o El Salvador vas a ser protagonista de una compañía que está creando historia construyendo los rieles transaccionales sobre blockchain para generar un sistema financiero más accesible, seguro y eficiente, siendo los habilitadores entre el mundo financiero tradicional y el mundo cripto.",

        },
        ];

    res.status(200).json(jobs)
}
