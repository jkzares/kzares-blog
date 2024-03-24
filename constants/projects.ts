import prisioner1 from "@/public/images/projects/prisioner-1.png"
import prisioner2 from "@/public/images/projects/prisioner-2.png"

export default [

    {
        id: "1",
        title: "The prisioner's Pit",
        url: "https://example.com",
        portrait: prisioner2,
        date: "13 may",
        status: "done",
        description: "Prisoner's Dilemma Algorithm Creator is a unique app that allows users to create and test their own algorithms for the classic game theory scenario, the Prisoner's Dilemma. Users can design strategies that compete against each other, analyzing outcomes and learning more about decision-making and cooperation dynamics. With a user-friendly interface and real-time simulations, this app provides a fun and educational way to explore game theory concepts.",
        content: [
            {
                picture: false,
                text: "Prisoner's Dilemma Algorithm Creator is a unique app that allows users to create and test their own algorithms for the classic game theory scenario, the Prisoner's Dilemma. Users can design strategies that compete against each other, analyzing outcomes and learning more about decision-making and cooperation dynamics. With a user-friendly interface and real-time simulations, this app provides a fun and educational way to explore game theory concepts."
            },
            {
                picture: true,
                url: prisioner1,
            },
            {
                picture: false,
                text: "Prisoner's Dilemma Algorithm Creator is a unique app that allows users to create and test their own algorithms for the classic game theory scenario, the Prisoner's Dilemma. Users can design strategies that compete against each other, analyzing outcomes and learning more about decision-making and cooperation dynamics. With a user-friendly interface and real-time simulations, this app provides a fun and educational way to explore game theory concepts."
            },
            {
                picture: true,
                url: prisioner2,
            }
        ]

    },
    {
        id: "2",
        title: "The prisioner's Pit 2",
        url: "https://example.com",
        portrait: prisioner2,
        date: "13 may",
        status: "done",
        description: "Prisoner's Dilemma Algorithm Creator is a unique app that allows users to create and test their own algorithms for the classic game theory scenario, the Prisoner's Dilemma. Users can design strategies that compete against each other, analyzing outcomes and learning more about decision-making and cooperation dynamics. With a user-friendly interface and real-time simulations, this app provides a fun and educational way to explore game theory concepts.",
        content: [
            {
                picture: false,
                text: "Prisoner's Dilemma Algorithm Creator is a unique app that allows users to create and test their own algorithms for the classic game theory scenario, the Prisoner's Dilemma. Users can design strategies that compete against each other, analyzing outcomes and learning more about decision-making and cooperation dynamics. With a user-friendly interface and real-time simulations, this app provides a fun and educational way to explore game theory concepts."
            },
            {
                picture: true,
                url: prisioner1,
            },
            {
                picture: true,
                url: prisioner2,
            }
        ]

    }

]

export type Project = {
    id: string,
    title: string,
    url: string,
    date: string,
    portrait: any,
    statud: string,
    description: string,
    content: [{

        picture: boolean,
        text?: string,
        url?: any,
    }]
}