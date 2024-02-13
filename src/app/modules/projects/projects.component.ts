import { Component, OnInit } from '@angular/core';
import { themes } from '../../shared/styles/colors';

interface Text {
  language: string;
  text: string;
  color?: string;
  flag?: string;
}
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
})

export class ProjectsComponent implements OnInit{
/*

<img width="96" height="96"  alt="ireland"/>

  */

  allTexts:Text[] = [
    {
      language: 'English',
      text: 'Great things coming soon.... :)',
      flag:"https://flagcdn.com/gb-eng.svg"
    },
    {
      language: 'Kannada',
      text: 'ಉತ್ತಮ ವಿಷಯಗಳು ಶೀಘ್ರದಲ್ಲೇ ಬರಲಿವೆ.... :)',
      flag:"https://flagcdn.com/in.svg"
    },
    {
      language:'Hindi',
      text: 'बहुत बढ़िया चीज़ें जल्द ही आ रही हैं.... :)',
      flag:"https://flagcdn.com/in.svg"
    },
    {
      language: 'German',
      text: 'Tolle Dinge kommen bald... :)',
      flag:"https://flagcdn.com/de.svg"
    },
    {
      language: 'Irish',
      text: 'Rudaí iontacha ag teacht go luath.... :)',
      flag:"https://flagcdn.com/ie.svg"
    },
    {
      language: 'Luxembourgish',
      text: 'Flott Saachen kommen geschwënn ... :)',
      flag: 'https://flagcdn.com/lu.svg'
    },
    {
      language: 'French',
      text: 'De belles choses arrivent bientôt... :)',
      flag:"https://flagcdn.com/fr.svg"
    },
    {
      language: 'Spanish',
      text: 'Grandes cosas próximamente.... :)',
      flag:"https://flagcdn.com/es.svg"
    },
    {
      language: 'Arabic',
      text: 'أشياء عظيمة قادمة قريبا....:)',
      flag:"https://flagcdn.com/ae.svg"
    },
    {
      language: 'Norwegian',
      text: 'Flotte ting kommer snart... :)',
      flag:"https://flagcdn.com/no.svg"
    },
    {
      language: 'Finnish',
      text: 'Hienoja juttuja tulossa pian... :)',
      flag:"https://flagcdn.com/fi.svg"
    },
    {
      language: 'Estonian',
      text: 'Suured asjad varsti tulemas... :)',
      flag:"https://flagcdn.com/ee.svg"
    },
    {
      language: 'Dutch',
      text: 'Er komen binnenkort geweldige dingen aan.... :)',
      flag:"https://flagcdn.com/nl.svg"
    },
    {
      language: 'Swedish',
      text: 'Snart kommer bra saker... :)',
      flag:"https://flagcdn.com/se.svg"
    },
    {
      language: 'Sanskrit',
      text: 'शीघ्रमेव महान् विषयः आगमिष्यति.... :)',
      flag:"https://flagcdn.com/in.svg"
    },
    {
      language: 'Portuguese',
      text: 'Grandes coisas em breve.... :)',
      flag:"https://flagcdn.com/pt.svg"
    },
    {
      language: 'Italian',
      text: 'Grandi cose in arrivo... :)',
      flag:"https://flagcdn.com/it.svg"
    }
  ];
  themes = themes.map(x=>x.theme.colors.primary[900]);
  constructor(){
  }
  shuffle = (array: any[]) => { return array. sort(() => Math. random() - 0.5); };
  ngOnInit(): void {
    this.themes = this.shuffle(this.themes);
    this.allTexts =this.shuffle(this.allTexts).map((x,idx)=>({...x,color:this.themes[idx]}));
  }
}
