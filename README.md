<h1 align="center"> Pre Onboarding 2nd 과제 - 상품 등록 </h1>

<h3 align="center"> 서비스 링크 : https://fervent-tereshkova-9b041a.netlify.app/</h3>

### 팀원

[박중섭](https://github.com/crucial-sub) [우종원](https://github.com/Ubermensch0608) [이태림](https://github.com/ttaerrim) [임수영](https://github.com/penguin311)

#### 팀원 별 기능 구현 사항
      
 `태림`: 상품 기본 정보 구현 및 state 관리 

 `종원`: 노출 및 판매 기간 설정, 재사용 가능 컴포넌트 생성, 상품소개 이미지, 구매자 추천 이미지 구현  

 `수영`: 상품 옵션 등록, 추가 옵션 상품 등록, 옵션 등록 영역, 옵션세트 이미지 첨부 기능 구현 및 CSS 적용

 `중섭`: 상품 배송 설정 및 상품 정보 고시 구현

---------

### 초기 세팅

1. 설치 
```bash
npm install
npm install react-redux @reduxjs/toolkit
npm install --save react-router-dom
```
2. 절대 경로 설정 - [참고문헌](https://create-react-app.dev/docs/importing-a-component/#absolute-imports)

--------

### 파일 구조 설정

     ├── public
     └── src
         ├── components
         │   ├── BuyerRecommendImg
         │   ├── Etc
         │   ├── NoticeProductInfo
         │   ├── ProductBenefit
         │   ├── ProductDelivery
         │   ├── ProductInfo
         │   ├── ProductOptions
         │   ├── ProductPeriodSetup
         │   ├── ProductThumbnail
         │   └── UploadImages
         ├── layout
         │   ├── Inputs
         │   └── Section
         ├── pages
         ├── store
         │   └── Contexts
         └── utils
             └── svg


-----------


### 과제 중점 사항
    
    
   1. 재사용 가능성 향상
       1. 재사용 가능한 하나의 버튼 컴포넌트를 생성 
       <img src="https://cdn.discordapp.com/attachments/935080254266019874/936439822669742160/2022-01-28_104945.jpg" alt="img">
       
       2. 반복되는 값, 함수, 스타일 등을 따로 지정하여 생산성을 높였다. <img src="https://cdn.discordapp.com/attachments/935080254266019874/936439822262874133/2022-01-28_104910.jpg" alt='img'>
       
       3. 간단한 tag 설정으로 컴포넌트를 재사용하였다. 
       <img src="https://cdn.discordapp.com/attachments/935080254266019874/936439822476779560/2022-01-28_105011.jpg" alt='img'>
  

              
      
