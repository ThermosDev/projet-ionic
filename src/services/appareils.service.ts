export class AppareilsService {
    appareilsList = [
        {
          name: 'Machine à laver',
          description: [
            'Volume: 6 litres',
            'Temps de lavage: 2 heures',
            'Consommation: 173 kWh/an',
            'Prix: 399,00 €',
          ],
          isOn: true
        },
        {
          name: 'Télévision',
          description: [
            'Dimensions: 40 pouces',
            'Consommation: 22 kWh/an',
            'Prix: 649,00 €'
          ],
          isOn: true
        },
        {
          name: 'Ordinateur',
          description: [
            'Marque: fait maison',
            'Consommation: 500 kWh/an',
            'Prix: 1699,00€'
          ],
          isOn: false
        }
      ];
}