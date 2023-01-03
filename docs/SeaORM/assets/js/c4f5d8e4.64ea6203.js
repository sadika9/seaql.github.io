"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[4195],{26826:(e,t,a)=>{a.r(t),a.d(t,{default:()=>T});var n=a(67294),l=a(80584),r=a(39960),i=a(52263);const o="heroBanner_qdFl",c="buttons_AeoN",s="homepageBanner_mBTI",m="homepageLogo_ewR0";var d=a(87462),u=a(86010);const p="features_xdhU";var f=a(68307);const E=[{title:"Async",icon:n.createElement(f.V5G,{size:26}),description:n.createElement(n.Fragment,null,"Relying on SQLx, SeaORM is a new library with async support from day 1.")},{title:"Dynamic",icon:n.createElement(f.Ktg,{size:26}),description:n.createElement(n.Fragment,null,"Built upon SeaQuery, SeaORM allows you to build complex queries without 'fighting the ORM'.")},{title:"Testable",icon:n.createElement(f.ZSR,{size:26}),description:n.createElement(n.Fragment,null,"Use mock connections and/or SQLite to write tests for your application logic.")},{title:"Service Oriented",icon:n.createElement(f.x_i,{size:26}),description:n.createElement(n.Fragment,null,"Quickly build services that join, filter, sort and paginate data in REST, GraphQL and gRPC APIs.")}];function g(e){let{icon:t,title:a,description:l}=e;return n.createElement("div",{className:(0,u.Z)("col col--6")},n.createElement("div",{style:{paddingBottom:"20px",paddingTop:"20px"}},n.createElement("div",{style:{display:"flex"}},n.createElement("div",{style:{paddingRight:"22px"}},t),n.createElement("h3",{style:{fontSize:"20px",color:"var(--ifm-color-primary)"}},a)),n.createElement("p",null,l)))}function h(){return n.createElement("section",{className:(0,u.Z)("home-section","home-section-alt",p)},n.createElement("div",{className:"container"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col col--11 col--offset-1"},n.createElement("div",{className:"row"},E.map(((e,t)=>n.createElement(g,(0,d.Z)({key:t},e)))))))))}const y="features_SiWs";var w=a(65488),b=a(85162),v=a(23746),N=a(92949),_=a(87410);(void 0!==a.g?a.g:window).Prism=_.Z,a(70767);const k=[{title:"Entity",code:'use sea_orm::entity::prelude::*;\n\n#[derive(Clone, Debug, PartialEq, DeriveEntityModel)]\n#[sea_orm(table_name = "cake")]\npub struct Model {\n    #[sea_orm(primary_key)]\n    pub id: i32,\n    pub name: String,\n}\n\n#[derive(Copy, Clone, Debug, EnumIter, DeriveRelation)]\npub enum Relation {\n    #[sea_orm(has_many = "super::fruit::Entity")]\n    Fruit,\n}\n\nimpl Related<super::fruit::Entity> for Entity {\n    fn to() -> RelationDef {\n        Relation::Fruit.def()\n    }\n}'},{title:"Select",code:'// find all models\nlet cakes: Vec<cake::Model> = Cake::find().all(db).await?;\n\n// find and filter\nlet chocolate: Vec<cake::Model> = Cake::find()\n    .filter(cake::Column::Name.contains("chocolate"))\n    .all(db)\n    .await?;\n\n// find one model\nlet cheese: Option<cake::Model> = Cake::find_by_id(1).one(db).await?;\nlet cheese: cake::Model = cheese.unwrap();\n\n// find related models (lazy)\nlet fruits: Vec<fruit::Model> = cheese.find_related(Fruit).all(db).await?;\n\n// find related models (eager)\nlet cake_with_fruits: Vec<(cake::Model, Vec<fruit::Model>)> =\n    Cake::find().find_with_related(Fruit).all(db).await?;'},{title:"Insert",code:'let apple = fruit::ActiveModel {\n    name: Set("Apple".to_owned()),\n    ..Default::default() // no need to set primary key\n};\n\nlet pear = fruit::ActiveModel {\n    name: Set("Pear".to_owned()),\n    ..Default::default()\n};\n\n// insert one\nlet pear: fruit::Model = pear.insert(db).await?;\n\n// insert many\nFruit::insert_many(vec![apple, pear]).exec(db).await?;'},{title:"Update",code:'use sea_orm::sea_query::{Expr, Value};\n\nlet pear: Option<fruit::Model> = Fruit::find_by_id(1).one(db).await?;\nlet mut pear: fruit::ActiveModel = pear.unwrap().into();\n\npear.name = Set("Sweet pear".to_owned());\n\n// update one\nlet pear: fruit::Model = pear.update(db).await?;\n\n// update many: UPDATE "fruit" SET "cake_id" = NULL WHERE "fruit"."name" LIKE \'%Apple%\'\nFruit::update_many()\n    .col_expr(fruit::Column::CakeId, Expr::value(Value::Int(None)))\n    .filter(fruit::Column::Name.contains("Apple"))\n    .exec(db)\n    .await?;'},{title:"Save",code:'let banana = fruit::ActiveModel {\n    id: NotSet,\n    name: Set("Banana".to_owned()),\n    ..Default::default()\n};\n\n// create, because primary key `id` is `NotSet`\nlet mut banana = banana.save(db).await?;\n\nbanana.name = Set("Banana Mongo".to_owned());\n\n// update, because primary key `id` is `Set`\nlet banana = banana.save(db).await?;'},{title:"Delete",code:'// delete one\nlet orange: Option<fruit::Model> = Fruit::find_by_id(1).one(db).await?;\nlet orange: fruit::Model = orange.unwrap();\nfruit::Entity::delete(orange.into_active_model())\n    .exec(db)\n    .await?;\n\n// or simply\nlet orange: Option<fruit::Model> = Fruit::find_by_id(1).one(db).await?;\nlet orange: fruit::Model = orange.unwrap();\norange.delete(db).await?;\n\n// delete many: DELETE FROM "fruit" WHERE "fruit"."name" LIKE \'Orange\'\nfruit::Entity::delete_many()\n    .filter(fruit::Column::Name.contains("Orange"))\n    .exec(db)\n    .await?;'}];function M(){const{siteConfig:{themeConfig:{prism:e={}}}}=(0,i.Z)(),[t,a]=(0,n.useState)(!1);(0,n.useEffect)((()=>{a(!0)}),[]);const{colorMode:l}=(0,N.I)(),r=e.theme,o=e.darkTheme||r,c="dark"===l?o:r;return n.createElement("section",{className:(0,u.Z)("home-section","home-section-alt",y)},n.createElement("div",{className:"container"},n.createElement("div",{className:"row"},n.createElement("div",{className:(0,u.Z)("col col--12")},n.createElement("div",{className:"padding-horiz--md"},n.createElement("h2",{className:"text--center"},"A quick taste of SeaORM"),n.createElement(w.Z,{className:(0,u.Z)("aa"),defaultValue:k[0].title,values:k.map((e=>{let{title:t,code:a}=e;return{label:t,value:t}}))},k.map(((e,a)=>{let{title:l,code:r}=e;return n.createElement(b.Z,{key:a,value:l},n.createElement(v.ZP,(0,d.Z)({},v.lG,{code:r,key:t,theme:c,language:"rust"}),(e=>{let{className:t,tokens:a,getLineProps:l,getTokenProps:r}=e;return n.createElement("pre",{className:""+t,style:{backgroundColor:"#292d3e"}},a.map(((e,t)=>n.createElement("div",l({line:e,key:t}),e.map(((e,t)=>n.createElement("span",r({token:e,key:t}))))))))})))}))))))))}const S="features_Em2x",x=[{url:"https://caido.io/",logo:"/SeaORM/img/other/caido-logo.png",desc:"A lightweight web security auditing toolkit",logoClassName:null},{url:"https://www.svix.com/",logo:"/SeaORM/img/other/svix-logo.svg",desc:"The enterprise ready webhooks service",logoClassName:"svixLogo_ZdR9"},{url:"https://www.spyglass.fyi/",logo:"/SeaORM/img/other/spyglass-logo.svg",desc:"A personal search engine",logoClassName:"spyglassLogo_DddV"}];function R(e){let{url:t,logo:a,desc:l,logoClassName:r}=e;return n.createElement("div",{className:(0,u.Z)("col col--4")},n.createElement("div",{style:{paddingBottom:"20px",paddingTop:"20px",height:"100%",textAlign:"center",display:"flex",flexDirection:"column",justifyContent:"flex-end"}},n.createElement("a",{href:t,target:"_blank"},n.createElement("img",{src:a,className:(0,u.Z)(r),style:{width:"250px"}})),n.createElement("p",null,l)))}function C(){return n.createElement("section",{className:(0,u.Z)("home-section",S)},n.createElement("div",{className:"container"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col col--12"},n.createElement("h2",{className:"text--center"},"Who's using SeaORM?"),n.createElement("br",null),n.createElement("p",{className:"text--center"},"The following products are powered by SeaORM:"))),n.createElement("div",{className:"row"},n.createElement("div",{className:"col col--12"},n.createElement("div",{className:"row"},x.map(((e,t)=>n.createElement(R,(0,d.Z)({key:t},e))))))),n.createElement("div",{className:"row"},n.createElement("div",{className:"col col--12"},n.createElement("br",null),n.createElement("p",{className:"text--center"},"For more projects, see ",n.createElement("a",{href:"https://github.com/SeaQL/sea-orm/blob/master/COMMUNITY.md#built-with-seaorm",target:"_blank"},"Built with SeaORM"),".")))))}const O="features_nemC",Z="mascot_Rqr3";function F(){return n.createElement("section",{className:(0,u.Z)("home-section","home-section-alt",O)},n.createElement("div",{className:"container"},n.createElement("div",{className:"row"},n.createElement("div",{className:(0,u.Z)("col col--12")},n.createElement("h2",{className:"text--center"},"Meet Terres, our official mascot"),n.createElement("p",{className:"text--center"},"A friend of ",n.createElement("a",{href:"https://www.rustacean.net/"},"Ferris"),", Terres the hermit crab is a member of the Rustacean family."),n.createElement("div",{className:"text--center padding-horiz--md"},n.createElement("img",{className:Z,src:"/SeaORM/img/Terres.png"}))))))}function A(){const{siteConfig:e}=(0,i.Z)();return n.createElement("header",{className:o},n.createElement("div",{className:"container"},n.createElement("img",{className:m,width:"90%",src:"/SeaORM/img/SeaORM logo.png"}),n.createElement("img",{className:s,width:"90%",src:"/SeaORM/img/SeaORM banner.png"}),n.createElement("h2",{className:"hero__subtitle"},e.tagline),n.createElement("div",{className:c},n.createElement(r.Z,{className:"button button--primary button--lg",to:"/docs/index"},"Getting Started"))))}function T(){const{siteConfig:e}=(0,i.Z)();return n.createElement(l.Z,{description:e.tagline},n.createElement(A,null),n.createElement("main",null,n.createElement(h,null),n.createElement(M,null),n.createElement(C,null),n.createElement(F,null)))}}}]);