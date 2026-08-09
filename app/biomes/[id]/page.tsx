import BiomesDetailView from '@/features/common/biomeDetails/components/BiomesDetailView'
import BiomesSidebar from '../components/BiomesSidebar'
import BiomesFooter from '../components/BiomesFooter'

const BiomesBadgeData = [
  {
    label: "მდებარეობა",
    icon: "/assets/icons/location.svg"
  },
  {
    label: "ჰავა",
    icon: "/assets/icons/temp.svg"
  },
  {
    label: "ნიადაგი",
    icon: "/assets/icons/Soil.svg"
  },
  {
    label: "მცენარეული საფარი: სტრუქტურა",
    icon: "/assets/icons/plent.svg"
  },
  {
    label: "მცენარეული საფარი: მცენარეთა გაბატონებული სასიცოცხლო ფორმები",
    icon: "/assets/icons/plent.svg"
  },
  {
    label: "მცენარეთა საფარი: საყურადღებო მცენარეები (სხვადასხვა ნიშნები)",
    icon: "/assets/icons/plent.svg"
  }
]

const Page = () => {

  return (
    <div className='relative'>
      <div className="relative after:absolute after:inset-0 after:content-[''] after:bg-linear-to-r after:from-black/68 after:via-black/30 after:via-60% after:to-black/5 bg-[url(/assets/images/img.png)] bg-center bg-no-repeat bg-cover h-100 xl:flex items-end justify-start px-14 py-8 hidden">
        <div className='z-50 max-w-160 flex flex-col gap-4'>
          <div className='flex  max-w-40 gap-2 bg-[#FFFFFF]/15 rounded-full border border-[#FFFFFF]/20 px-2 pt-1.5'>
            <span className='w-3.5 h-3.5 rounded-full border-2 border-[#81A481] bg-[#024902]'></span>
            <span className='text-white text-[10px] py-0.5 leading-4'>
              ჰილეა (ეკვ. ტყეები)
            </span>
          </div>
          <h1 className='text-white text-[40px] leading-11.5'>
            მარადმწვანე ეკვადორული და ტროპიკული წვიმიანი ტყეები (ჰილეა)
          </h1>
        </div>
      </div>

      <div className='flex my-8  relative '>
        <div className='max-w-348  flex-col-reverse  xl:flex-row md:flex-col-reverse  w-full mx-auto flex items-start justify-center gap-6'>
          <div className='xl:max-w-230 px-4 xl:px-6 flex  flex-col gap-6 w-full '>

            <BiomesDetailView
              icon={BiomesBadgeData[0].icon}
              badge={BiomesBadgeData[0].label}
              data={{
                figureTitle: 'პოპულარული უდაბნოს ლანდშაფტი',
                imageArr: [
                  { id: 1, src: '/assets/images/sahara/1.avif' },
                  { id: 2, src: '/assets/images/sahara/2.avif' },
                  { id: 3, src: '/assets/images/sahara/3.avif' },
                  { id: 4, src: '/assets/images/sahara/4.avif' },
                  { id: 5, src: '/assets/images/sahara/5.avif' },
                ],
                description: (
                  <p>
                    ჰილეა დიდი სახეობრივი მრავალფეროვნებით ხასიათდება, მაგრამ სხვადასხვა სახეობის, გვარის და ზოგჯერ ოჯახის ხემცენარეებსაც კი ვეგეტატიური ორგანოების მსგავსი აგებულება აქვს. ხეთა მარადმწვანე ფოთლები ტყავისებრია, მათი ცვლა თანდათანობით, 7-30-თვიანი ციკლებით ხდება. Z ხე-ცათამბჯენებს უვითარდებათ ფიცრისებრი ე.წ. საყრდენი მიწისზედა ფესვები, რომელთა სიმაღლე 5-8 მ-ს აღწევს{' '}
                    <span className="bg-[#E6F3EC] text-[#008645] text-[13px] px-2.25 py-0.75 inline-block rounded-full font-bold mx-1">სურ. 4</span>
                    . Z ხემცენარეთა მეორე იარუსში სახეობათა ნაწილი კაულიფლორიით - ყვავილების და შემდეგ ნაყოფის პირდაპირ ღეროზე და ზოგჯერ მსხვილ ტოტებზე განვითარების უნარით ხასიათდება{' '}
                    <span className="bg-[#E6F3EC] text-[#008645] text-[13px] px-2.25 py-0.75 inline-block rounded-full font-bold mx-1">სურ. 5</span>
                    , რაც ხეზე მცოცავი სხვადასხვა ცხოველის დახმარებით ყვავილების დამტვერვას უზრუნველყოფს. Z ჰილეა განსაკუთრებით მდიდარია ეპიფიტებით - მცენარეებით რომლებიც სხვა მცენარეებზე ცხოვრობენ{' '}
                    <span className="bg-[#E6F3EC] text-[#008645] text-[13px] px-2.25 py-0.75 inline-block rounded-full font-bold mx-1">სურ. 6</span>
                    ა და ხემცენარეთა იარუსებსშორის სივრცეს ავსებენ. Z ხეებს საყრდენად იყენებენ ლიანები, მათ შორის, ე.წ. მახრჩობელა ლიანები (მაგ., ფიკუსები), რომლებიც საყრდენ ხეს შემოეხვვევიან, შემდეგ კი ნიადაგზე დასაყრდენ გამერქნებულ საჰაერო ფესვებს ივითარებენ. საყრდენი ხე დროთა განმავლობაში ხმება და მის ადგილს მახრჩობელა ლიანა იკავებს{' '}
                    <span className="bg-[#E6F3EC] text-[#008645] text-[13px] px-2.25 py-0.75 inline-block rounded-full font-bold mx-1">სურ. 7</span>
                  </p>
                )
              }}
            />

            <BiomesDetailView
              icon={BiomesBadgeData[1].icon}
              badge={BiomesBadgeData[1].label}
              data={{
                figureTitle: 'კლიმატური ზონები',
                imageArr: [
                  { id: 1, src: '/assets/images/sahara/1.avif' },
                  { id: 2, src: '/assets/images/sahara/2.avif' },
                  { id: 3, src: '/assets/images/sahara/3.avif' },
                  { id: 4, src: '/assets/images/sahara/4.avif' },
                  { id: 5, src: '/assets/images/sahara/5.avif' },
                ],
                description: (
                  <p>
                    ჰილეა დიდი სახეობრივი მრავალფეროვნებით ხასიათდება, მაგრამ სხვადასხვა სახეობის, გვარის და ზოგჯერ ოჯახის ხემცენარეებსაც კი ვეგეტატიური ორგანოების მსგავსი აგებულება აქვს. ხეთა მარადმწვანე ფოთლები ტყავისებრია, მათი ცვლა თანდათანობით, 7-30-თვიანი ციკლებით ხდება. Z ხე-ცათამბჯენებს უვითარდებათ ფიცრისებრი ე.წ. საყრდენი მიწისზედა ფესვები, რომელთა სიმაღლე 5-8 მ-ს აღწევს{' '}
                    <span className="bg-[#E6F3EC] text-[#008645] text-[13px] px-2.25 py-0.75 inline-block rounded-full font-bold mx-1">სურ. 4</span>
                    . Z ხემცენარეთა მეორე იარუსში სახეობათა ნაწილი კაულიფლორიით - ყვავილების და შემდეგ ნაყოფის პირდაპირ ღეროზე და ზოგჯერ მსხვილ ტოტებზე განვითარების უნარით ხასიათდება{' '}
                    <span className="bg-[#E6F3EC] text-[#008645] text-[13px] px-2.25 py-0.75 inline-block rounded-full font-bold mx-1">სურ. 5</span>
                    , რაც ხეზე მცოცავი სხვადასხვა ცხოველის დახმარებით ყვავილების დამტვერვას უზრუნველყოფს. Z ჰილეა განსაკუთრებით მდიდარია ეპიფიტებით - მცენარეებით რომლებიც სხვა მცენარეებზე ცხოვრობენ{' '}
                    <span className="bg-[#E6F3EC] text-[#008645] text-[13px] px-2.25 py-0.75 inline-block rounded-full font-bold mx-1">სურ. 6</span>
                    ა და ხემცენარეთა იარუსებსშორის სივრცეს ავსებენ. Z ხეებს საყრდენად იყენებენ ლიანები, მათ შორის, ე.წ. მახრჩობელა ლიანები (მაგ., ფიკუსები), რომლებიც საყრდენ ხეს შემოეხვვევიან, შემდეგ კი ნიადაგზე დასაყრდენ გამერქნებულ საჰაერო ფესვებს ივითარებენ. საყრდენი ხე დროთა განმავლობაში ხმება და მის ადგილს მახრჩობელა ლიანა იკავებს{' '}
                    <span className="bg-[#E6F3EC] text-[#008645] text-[13px] px-2.25 py-0.75 inline-block rounded-full font-bold mx-1">სურ. 7</span>
                  </p>
                )
              }}
            />

            <BiomesDetailView
              icon={BiomesBadgeData[2].icon}
              badge={BiomesBadgeData[2].label}
              data={{
                figureTitle: 'ნიადაგის ფენები',
                imageArr: [
                  { id: 1, src: '/assets/images/sahara/1.avif' },
                  { id: 2, src: '/assets/images/sahara/2.avif' },
                  { id: 3, src: '/assets/images/sahara/3.avif' },
                  { id: 4, src: '/assets/images/sahara/4.avif' },
                  { id: 5, src: '/assets/images/sahara/5.avif' },
                ],
                description: (
                  <p>
                    ჰილეა დიდი სახეობრივი მრავალფეროვნებით ხასიათდება, მაგრამ სხვადასხვა სახეობის, გვარის და ზოგჯერ ოჯახის ხემცენარეებსაც კი ვეგეტატიური ორგანოების მსგავსი აგებულება აქვს. ხეთა მარადმწვანე ფოთლები ტყავისებრია, მათი ცვლა თანდათანობით, 7-30-თვიანი ციკლებით ხდება. Z ხე-ცათამბჯენებს უვითარდებათ ფიცრისებრი ე.წ. საყრდენი მიწისზედა ფესვები, რომელთა სიმაღლე 5-8 მ-ს აღწევს{' '}
                    <span className="bg-[#E6F3EC] text-[#008645] text-[13px] px-2.25 py-0.75 inline-block rounded-full font-bold mx-1">სურ. 4</span>
                    . Z ხემცენარეთა მეორე იარუსში სახეობათა ნაწილი კაულიფლორიით - ყვავილების და შემდეგ ნაყოფის პირდაპირ ღეროზე და ზოგჯერ მსხვილ ტოტებზე განვითარების უნარით ხასიათდება{' '}
                    <span className="bg-[#E6F3EC] text-[#008645] text-[13px] px-2.25 py-0.75 inline-block rounded-full font-bold mx-1">სურ. 5</span>
                    , რაც ხეზე მცოცავი სხვადასხვა ცხოველის დახმარებით ყვავილების დამტვერვას უზრუნველყოფს. Z ჰილეა განსაკუთრებით მდიდარია ეპიფიტებით - მცენარეებით რომლებიც სხვა მცენარეებზე ცხოვრობენ{' '}
                    <span className="bg-[#E6F3EC] text-[#008645] text-[13px] px-2.25 py-0.75 inline-block rounded-full font-bold mx-1">სურ. 6</span>
                    ა და ხემცენარეთა იარუსებსშორის სივრცეს ავსებენ. Z ხეებს საყრდენად იყენებენ ლიანები, მათ შორის, ე.წ. მახრჩობელა ლიანები (მაგ., ფიკუსები), რომლებიც საყრდენ ხეს შემოეხვვევიან, შემდეგ კი ნიადაგზე დასაყრდენ გამერქნებულ საჰაერო ფესვებს ივითარებენ. საყრდენი ხე დროთა განმავლობაში ხმება და მის ადგილს მახრჩობელა ლიანა იკავებს{' '}
                    <span className="bg-[#E6F3EC] text-[#008645] text-[13px] px-2.25 py-0.75 inline-block rounded-full font-bold mx-1">სურ. 7</span>
                  </p>
                )
              }}
            />

            <BiomesDetailView
              icon={BiomesBadgeData[3].icon}
              badge={BiomesBadgeData[3].label}
              data={{
                figureTitle: 'პოპულარული უდაბნოს ლანდშაფტი',
                imageArr: [
                  { id: 1, src: '/assets/images/sahara/1.avif' },
                  { id: 2, src: '/assets/images/sahara/2.avif' },
                  { id: 3, src: '/assets/images/sahara/3.avif' },
                  { id: 4, src: '/assets/images/sahara/4.avif' },
                  { id: 5, src: '/assets/images/sahara/5.avif' },
                ],
                description: (
                  <p>
                    ჰილეა დიდი სახეობრივი მრავალფეროვნებით ხასიათდება, მაგრამ სხვადასხვა სახეობის, გვარის და ზოგჯერ ოჯახის ხემცენარეებსაც კი ვეგეტატიური ორგანოების მსგავსი აგებულება აქვს. ხეთა მარადმწვანე ფოთლები ტყავისებრია, მათი ცვლა თანდათანობით, 7-30-თვიანი ციკლებით ხდება. Z ხე-ცათამბჯენებს უვითარდებათ ფიცრისებრი ე.წ. საყრდენი მიწისზედა ფესვები, რომელთა სიმაღლე 5-8 მ-ს აღწევს{' '}
                    <span className="bg-[#E6F3EC] text-[#008645] text-[13px] px-2.25 py-0.75 inline-block rounded-full font-bold mx-1">სურ. 4</span>
                    . Z ხემცენარეთა მეორე იარუსში სახეობათა ნაწილი კაულიფლორიით - ყვავილების და შემდეგ ნაყოფის პირდაპირ ღეროზე და ზოგჯერ მსხვილ ტოტებზე განვითარების უნარით ხასიათდება{' '}
                    <span className="bg-[#E6F3EC] text-[#008645] text-[13px] px-2.25 py-0.75 inline-block rounded-full font-bold mx-1">სურ. 5</span>
                    , რაც ხეზე მცოცავი სხვადასხვა ცხოველის დახმარებით ყვავილების დამტვერვას უზრუნველყოფს. Z ჰილეა განსაკუთრებით მდიდარია ეპიფიტებით - მცენარეებით რომლებიც სხვა მცენარეებზე ცხოვრობენ{' '}
                    <span className="bg-[#E6F3EC] text-[#008645] text-[13px] px-2.25 py-0.75 inline-block rounded-full font-bold mx-1">სურ. 6</span>
                    ა და ხემცენარეთა იარუსებსშორის სივრცეს ავსებენ. Z ხეებს საყრდენად იყენებენ ლიანები, მათ შორის, ე.წ. მახრჩობელა ლიანები (მაგ., ფიკუსები), რომლებიც საყრდენ ხეს შემოეხვვევიან, შემდეგ კი ნიადაგზე დასაყრდენ გამერქნებულ საჰაერო ფესვებს ივითარებენ. საყრდენი ხე დროთა განმავლობაში ხმება და მის ადგილს მახრჩობელა ლიანა იკავებს{' '}
                    <span className="bg-[#E6F3EC] text-[#008645] text-[13px] px-2.25 py-0.75 inline-block rounded-full font-bold mx-1">სურ. 7</span>
                  </p>
                )
              }}
            />

            <BiomesDetailView
              icon={BiomesBadgeData[4].icon}
              badge={BiomesBadgeData[4].label}
              data={{
                figureTitle: 'გაბატონებული ფორმები',
                imageArr: [
                  { id: 1, src: '/assets/images/sahara/1.avif' },
                  { id: 2, src: '/assets/images/sahara/2.avif' },
                  { id: 3, src: '/assets/images/sahara/3.avif' },
                  { id: 4, src: '/assets/images/sahara/4.avif' },
                  { id: 5, src: '/assets/images/sahara/5.avif' },
                ],
                description: (
                  <p>
                    ჰილეა დიდი სახეობრივი მრავალფეროვნებით ხასიათდება, მაგრამ სხვადასხვა სახეობის, გვარის და ზოგჯერ ოჯახის ხემცენარეებსაც კი ვეგეტატიური ორგანოების მსგავსი აგებულება აქვს. ხეთა მარადმწვანე ფოთლები ტყავისებრია, მათი ცვლა თანდათანობით, 7-30-თვიანი ციკლებით ხდება. Z ხე-ცათამბჯენებს უვითარდებათ ფიცრისებრი ე.წ. საყრდენი მიწისზედა ფესვები, რომელთა სიმაღლე 5-8 მ-ს აღწევს{' '}
                    <span className="bg-[#E6F3EC] text-[#008645] text-[13px] px-2.25 py-0.75 inline-block rounded-full font-bold mx-1">სურ. 4</span>
                    . Z ხემცენარეთა მეორე იარუსში სახეობათა ნაწილი კაულიფლორიით - ყვავილების და შემდეგ ნაყოფის პირდაპირ ღეროზე და ზოგჯერ მსხვილ ტოტებზე განვითარების უნარით ხასიათდება{' '}
                    <span className="bg-[#E6F3EC] text-[#008645] text-[13px] px-2.25 py-0.75 inline-block rounded-full font-bold mx-1">სურ. 5</span>
                    , რაც ხეზე მცოცავი სხვადასხვა ცხოველის დახმარებით ყვავილების დამტვერვას უზრუნველყოფს. Z ჰილეა განსაკუთრებით მდიდარია ეპიფიტებით - მცენარეებით რომლებიც სხვა მცენარეებზე ცხოვრობენ{' '}
                    <span className="bg-[#E6F3EC] text-[#008645] text-[13px] px-2.25 py-0.75 inline-block rounded-full font-bold mx-1">სურ. 6</span>
                    ა და ხემცენარეთა იარუსებსშორის სივრცეს ავსებენ. Z ხეებს საყრდენად იყენებენ ლიანები, მათ შორის, ე.წ. მახრჩობელა ლიანები (მაგ., ფიკუსები), რომლებიც საყრდენ ხეს შემოეხვვევიან, შემდეგ კი ნიადაგზე დასაყრდენ გამერქნებულ საჰაერო ფესვებს ივითარებენ. საყრდენი ხე დროთა განმავლობაში ხმება და მის ადგილს მახრჩობელა ლიანა იკავებს{' '}
                    <span className="bg-[#E6F3EC] text-[#008645] text-[13px] px-2.25 py-0.75 inline-block rounded-full font-bold mx-1">სურ. 7</span>
                  </p>
                )
              }}
            />

            <BiomesDetailView
              icon={BiomesBadgeData[5].icon}
              badge={BiomesBadgeData[5].label}
              data={{
                figureTitle: 'იშვიათი მცენარეები',
                imageArr: [
                  { id: 1, src: '/assets/images/sahara/1.avif' },
                  { id: 2, src: '/assets/images/sahara/2.avif' },
                  { id: 3, src: '/assets/images/sahara/3.avif' },
                  { id: 4, src: '/assets/images/sahara/4.avif' },
                  { id: 5, src: '/assets/images/sahara/5.avif' },
                ],
                description: (
                  <p>
                    ჰილეა დიდი სახეობრივი მრავალფეროვნებით ხასიათდება, მაგრამ სხვადასხვა სახეობის, გვარის და ზოგჯერ ოჯახის ხემცენარეებსაც კი ვეგეტატიური ორგანოების მსგავსი აგებულება აქვს. ხეთა მარადმწვანე ფოთლები ტყავისებრია, მათი ცვლა თანდათანობით, 7-30-თვიანი ციკლებით ხდება. Z ხე-ცათამბჯენებს უვითარდებათ ფიცრისებრი ე.წ. საყრდენი მიწისზედა ფესვები, რომელთა სიმაღლე 5-8 მ-ს აღწევს{' '}
                    <span className="bg-[#E6F3EC] text-[#008645] text-[13px] px-2.25 py-0.75 inline-block rounded-full font-bold mx-1">სურ. 4</span>
                    . Z ხემცენარეთა მეორე იარუსში სახეობათა ნაწილი კაულიფლორიით - ყვავილების და შემდეგ ნაყოფის პირდაპირ ღეროზე და ზოგჯერ მსხვილ ტოტებზე განვითარების უნარით ხასიათდება{' '}
                    <span className="bg-[#E6F3EC] text-[#008645] text-[13px] px-2.25 py-0.75 inline-block rounded-full font-bold mx-1">სურ. 5</span>
                    , რაც ხეზე მცოცავი სხვადასხვა ცხოველის დახმარებით ყვავილების დამტვერვას უზრუნველყოფს. Z ჰილეა განსაკუთრებით მდიდარია ეპიფიტებით - მცენარეებით რომლებიც სხვა მცენარეებზე ცხოვრობენ{' '}
                    <span className="bg-[#E6F3EC] text-[#008645] text-[13px] px-2.25 py-0.75 inline-block rounded-full font-bold mx-1">სურ. 6</span>
                    ა და ხემცენარეთა იარუსებსშორის სივრცეს ავსებენ. Z ხეებს საყრდენად იყენებენ ლიანები, მათ შორის, ე.წ. მახრჩობელა ლიანები (მაგ., ფიკუსები), რომლებიც საყრდენ ხეს შემოეხვვევიან, შემდეგ კი ნიადაგზე დასაყრდენ გამერქნებულ საჰაერო ფესვებს ივითარებენ. საყრდენი ხე დროთა განმავლობაში ხმება და მის ადგილს მახრჩობელა ლიანა იკავებს{' '}
                    <span className="bg-[#E6F3EC] text-[#008645] text-[13px] px-2.25 py-0.75 inline-block rounded-full font-bold mx-1">სურ. 7</span>
                  </p>
                )
              }}
            />

          </div>
          <BiomesSidebar />
        </div>
      </div>

      <BiomesFooter  />

    </div>
  )
}

export default Page
