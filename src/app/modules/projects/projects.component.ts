import { Component, OnInit } from '@angular/core';
import { themes } from '../../shared/styles/colors';

interface Text {
  language: string;
  text: string;
  color?: string;
}
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
})

export class ProjectsComponent implements OnInit{

  allTexts:Text[] = [
    {
      language: 'English',
      text: 'Great things coming soon.... :)'
    },
    {
      language: 'Kannada',
      text: 'ಉತ್ತಮ ವಿಷಯಗಳು ಶೀಘ್ರದಲ್ಲೇ ಬರಲಿವೆ.... :)'
    },
    {
      language:'Hindi',
      text: 'बहुत बढ़िया चीज़ें जल्द ही आ रही हैं.... :)'
    },
    {
      language: 'German',
      text: 'Tolle Dinge kommen bald... :)'
    },
    {
      language: 'Irish',
      text: 'Rudaí iontacha ag teacht go luath.... :)'
    },
    {
      language: 'Luxembourgish',
      text: 'Flott Saachen kommen geschwënn ... :)'
    },
    {
      language: 'French',
      text: 'De belles choses arrivent bientôt... :)'
    },
    {
      language: 'Spanish',
      text: 'Grandes cosas próximamente.... :)'
    },
    {
      language: 'Arabic',
      text: 'أشياء عظيمة قادمة قريبا....:)'
    },
    {
      language: 'Norwegian',
      text: 'Flotte ting kommer snart... :)'
    },
    {
      language: 'Finnish',
      text: 'Hienoja juttuja tulossa pian... :)'
    },
    {
      language: 'Estonian',
      text: 'Suured asjad varsti tulemas... :)'
    },
    {
      language: 'Dutch',
      text: 'Er komen binnenkort geweldige dingen aan.... :)'
    },
    {
      language: 'Swedish',
      text: 'Snart kommer bra saker... :)'
    },
    {
      language: 'Sanskrit',
      text: 'शीघ्रमेव महान् विषयः आगमिष्यति.... :)'
    }
  ];
  themes = themes.map(x=>x.theme.colors.primary[500]);
  constructor(){
  }
  shuffle = (array: any[]) => { return array. sort(() => Math. random() - 0.5); };
  ngOnInit(): void {
    this.themes = this.shuffle(this.themes);
    this.allTexts =this.shuffle(this.allTexts).map((x,idx)=>({...x,color:this.themes[idx]}));
  }
}
