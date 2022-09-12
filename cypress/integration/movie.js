describe("Testes automaticos da API da TMDB na Collection de Movie", ()=>{
    it('Validar dados do filme Thor: Love and Thunder', ()=>{
        const discover = 'movie/616037?api_key=7cb26fe126c41af5eeb911998106ce6d&language=en-US'
        cy.GetMethod(discover).as('response'),
        cy.get('@response').should((response)=>{
            expect(response.status).to.equal(200),
            expect(response.body.id).to.equal(616037),
            expect(response.body.imdb_id).to.equal("tt10648342"),
            expect(response.body.original_title).to.equal("Thor: Love and Thunder")
        })
    }),
    it('Validar apresentação dos Creditos', ()=>{
        const discover = 'movie/616037/credits?api_key=7cb26fe126c41af5eeb911998106ce6d&language=en-US'
        cy.GetMethod(discover).as('response'),
        cy.get('@response').should((response)=>{
            expect(response.status).to.equal(200),
            expect(response.body.id).to.equal(616037),
            expect(response.body.cast[0].name).to.equal("Chris Hemsworth"),
            expect(response.body.cast[1].character).to.equal("Jane Foster / The Mighty Thor"),
            expect(response.body.cast[1].name).to.equal("Natalie Portman")
        })
    }),
    it('Validar titulos recomendados', ()=>{
        const discover = 'movie/616037/recommendations?api_key=7cb26fe126c41af5eeb911998106ce6d&language=en-US&page=1'
        cy.GetMethod(discover).as('response'),
        cy.get('@response').should((response)=>{
            expect(response.status).to.equal(200),
            expect(response.body.results[0].original_title).to.equal("Ariel"),
            expect(response.body.results[1].original_title).to.equal("Minions: The Rise of Gru")
            expect(response.body.results[2].original_title).to.equal("Ollie Klublershturf vs. the Nazis")
        })
    }),
    it('Validar comentarios sobre o filme', ()=>{
        const discover = 'movie/616037/reviews?api_key=7cb26fe126c41af5eeb911998106ce6d&language=en-US&page=1'
        cy.GetMethod(discover).as('response'),
        cy.get('@response').should((response)=>{
            expect(response.status).to.equal(200),
            expect(response.body.id).to.equal(616037),
            expect(response.body.results[1].author).to.equal("TheAsh"),
            expect(response.body.results[1].content).to.equal("One of the best MCU up to date. Gorr is my favourite villain so far. Chris Hemsworth is amazing as always. The story is truly awesome, the visuals are stunning. Another Taika banger"),
            expect(response.body.results[2].author).to.equal("garethmb"),
            expect(response.body.results[2].content).to.equal("The God of Thunder returns in Marvel Studios’ “Thor: Love and Thunder” and audiences find that Thor (Chris Hemsworth), has been doing missions with the Guardians of the Galaxy while he works himself back into shape and looks to find a new purpose in life.\r\n\r\nThor has been taking the spotlight in many of the missions and when multiple calls for help arise, Thor opts to go off on his own to address a particular call for help while the Guardians head on their way to help others.\r\n\r\nIt is learned that a being named Gorr (Christian Bale) has been killing Gods and Thor is eager to put a stop to him before he can do more damage. His mission soon puts him on a collision course with Gorr and The Mighty Thor (Natalie Portman) who being his ex and wielding his former weapon causes more than a few funny and awkward moments.\r\n\r\nIn a race to save captured children, rally the gods, and defeat Gorr, Thor, and Jane along with Korr (Taika Waititi) and Valkyrie (Tessa Thompson), embark on an epic adventure in a race against time.\r\n\r\nWhile audiences have come to expect Marvel films to be epic cinematic events, this film is less on the over-the-top action sequences in favor of establishing new circumstances and challenges for the characters going forward.\r\n\r\nWhile there are indeed action sequences and plenty of VFX, it does not have the action or intensity of several of the past films. What it does offer is a good mix of action and humor with enjoyable characters old and new and establishes scenarios for the MCU going forward.\r\n\r\nBale is very good as Gorr and you understand his motivations clearly as while evil, he has a degree of sympathy towards his character which makes his creepy performance all the more compelling.\r\n\r\nThe cast works very well with one another and there are two scenes in the credits which open up all kinds of possibilities for the future as we are told Thor will return before the credits even begin to roll.\r\n\r\nThe film also has considerable music and I joked to myself that Guns and Roses are going to be getting a big check due to their music being used frequently during the film as well as that of other artists which helps make the film an enjoyable outing from start to finish which should delight fans as we wait to see for the next cinematic offering from Marvel.\r\n\r\n4 stars out of 5")
        })
    }),
    it('Validar os filmes mais populares', ()=>{
        const discover = 'movie/popular?api_key=7cb26fe126c41af5eeb911998106ce6d&language=en-US&page=1'
        cy.GetMethod(discover).as('response'),
        cy.get('@response').should((response)=>{
            var titulo1 = response.body.results[0].original_title
            var titulo2 = response.body.results[1].original_title
            var titulo3 = response.body.results[2].original_title
            var titulo4 = response.body.results[3].original_title
            expect(response.status).to.equal(200),
            expect(response.body.results[0].original_title).to.equal(titulo1),
            expect(response.body.results[1].original_title).to.equal(titulo2),
            expect(response.body.results[2].original_title).to.equal(titulo3),
            expect(response.body.results[3].original_title).to.equal(titulo4)
        })
    })
})
