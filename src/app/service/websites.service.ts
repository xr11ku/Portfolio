import { Injectable } from '@angular/core';
import { Iwebsites } from '../interfaces/websites.model';

@Injectable({
  providedIn: 'root'
})
export class WebsitesService {
  websites:Iwebsites[] = [
    {
      img:'assets/images/websites/Portfolio.png',
      title:'Portfolio',
      gitReq:'https://github.com/xr11ku/Portfolio?fbclid=IwZXh0bgNhZW0CMTAAAR2iRTsdyETd6z5zNNRVWCD6f32Cq3rnLpk8FLyAZmB8NPFxu-0BSJlNFdA_aem_i3_j9k-rr8eMbwbP4fvnqQ',
      liveLink:'https://beqasportfoliobeta.netlify.app/?fbclid=IwZXh0bgNhZW0CMTAAAR3M82_Jt-qW5QzpaxABTGjf8zd6Pu__QWquQV4LswwzpCjHFQve3cSUxGo_aem_NUU_PzjjMkERBa1VzP9z8A'
    },
    {
      img:'assets/images/websites/Tktge.png',
      title:'Tkt.Ge "Clone"',
      gitReq:'https://github.com/xr11ku/tktGe',
      liveLink:'#'
    },
    {
      img:'assets/images/websites/Lopstudios.png',
      title:'Lopstudios',
      gitReq:'https://github.com/xr11ku/Loopstudios',
      liveLink:'https://xr11ku.github.io/Loopstudios/'
    },
    {
      img:'assets/images/websites/Lopstudios.png',
      title:'Lopstudios',
      gitReq:'https://github.com/xr11ku/Loopstudios',
      liveLink:'https://xr11ku.github.io/Loopstudios/'
    },
    {
      img:'assets/images/websites/Lopstudios.png',
      title:'Lopstudios',
      gitReq:'https://github.com/xr11ku/Loopstudios',
      liveLink:'https://xr11ku.github.io/Loopstudios/'
    },
    {
      img:'assets/images/websites/Lopstudios.png',
      title:'Lopstudios',
      gitReq:'https://github.com/xr11ku/Loopstudios',
      liveLink:'https://xr11ku.github.io/Loopstudios/'
    },
    {
      img:'assets/images/websites/Lopstudios.png',
      title:'Lopstudios',
      gitReq:'https://github.com/xr11ku/Loopstudios',
      liveLink:'https://xr11ku.github.io/Loopstudios/'
    },
    {
      img:'assets/images/websites/Lopstudios.png',
      title:'Lopstudios',
      gitReq:'https://github.com/xr11ku/Loopstudios',
      liveLink:'https://xr11ku.github.io/Loopstudios/'
    },
    {
      img:'assets/images/websites/Lopstudios.png',
      title:'Lopstudios',
      gitReq:'https://github.com/xr11ku/Loopstudios',
      liveLink:'https://xr11ku.github.io/Loopstudios/'
    },
    {
      img:'assets/images/websites/Lopstudios.png',
      title:'Lopstudios',
      gitReq:'https://github.com/xr11ku/Loopstudios',
      liveLink:'https://xr11ku.github.io/Loopstudios/'
    },
    {
      img:'assets/images/websites/Lopstudios.png',
      title:'Lopstudios',
      gitReq:'https://github.com/xr11ku/Loopstudios',
      liveLink:'https://xr11ku.github.io/Loopstudios/'
    },
    {
      img:'assets/images/websites/Lopstudios.png',
      title:'Lopstudios',
      gitReq:'https://github.com/xr11ku/Loopstudios',
      liveLink:'https://xr11ku.github.io/Loopstudios/'
    },
  ]

  mainPageWebsites:Iwebsites[] = [
    {
      img:'assets/images/websites/Portfolio.png',
      title:'Portfolio',
      gitReq:'https://github.com/xr11ku/Portfolio?fbclid=IwZXh0bgNhZW0CMTAAAR2iRTsdyETd6z5zNNRVWCD6f32Cq3rnLpk8FLyAZmB8NPFxu-0BSJlNFdA_aem_i3_j9k-rr8eMbwbP4fvnqQ',
      liveLink:'https://beqasportfoliobeta.netlify.app/?fbclid=IwZXh0bgNhZW0CMTAAAR3M82_Jt-qW5QzpaxABTGjf8zd6Pu__QWquQV4LswwzpCjHFQve3cSUxGo_aem_NUU_PzjjMkERBa1VzP9z8A'
    },
    {
      img:'assets/images/websites/Tktge.png',
      title:'Tkt.Ge "Clone"',
      gitReq:'https://github.com/xr11ku/tktGe',
      liveLink:'#'
    },
    {
      img:'assets/images/websites/Lopstudios.png',
      title:'Lopstudios',
      gitReq:'https://github.com/xr11ku/Loopstudios',
      liveLink:'https://xr11ku.github.io/Loopstudios/'
    },
    {
      img:'assets/images/websites/Lopstudios.png',
      title:'Lopstudios',
      gitReq:'https://github.com/xr11ku/Loopstudios',
      liveLink:'https://xr11ku.github.io/Loopstudios/'
    },
    {
      img:'assets/images/websites/Lopstudios.png',
      title:'Lopstudios',
      gitReq:'https://github.com/xr11ku/Loopstudios',
      liveLink:'https://xr11ku.github.io/Loopstudios/'
    },
    {
      img:'assets/images/websites/Lopstudios.png',
      title:'Lopstudios',
      gitReq:'https://github.com/xr11ku/Loopstudios',
      liveLink:'https://xr11ku.github.io/Loopstudios/'
    },
    {
      img:'assets/images/websites/Lopstudios.png',
      title:'Lopstudios',
      gitReq:'https://github.com/xr11ku/Loopstudios',
      liveLink:'https://xr11ku.github.io/Loopstudios/'
    },
    {
      img:'assets/images/websites/Lopstudios.png',
      title:'Lopstudios',
      gitReq:'https://github.com/xr11ku/Loopstudios',
      liveLink:'https://xr11ku.github.io/Loopstudios/'
    },
  ]
}
