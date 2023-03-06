import mock from '@/@fake-db/mock'
/* eslint-disable global-require */
const data = {
  faqData: {
    // payment
    payment: {
      icon: 'DatabaseIcon',
      title: 'Database',
      subtitle: 'Cara menggunakan database versi 5.x di versi 6.x',
      qandA: [
        {
          question: 'Cara menggunakan database versi 5.x di versi 6.x',
          ans:
            '<ul>'+
            '<li>Matikan services eRaporSMKDB</li>'+
            '<li>copy folder eRaporSMK di drive C, amankan di drive lain</li>'+
            '<li>Uninstall e-Rapor SMK versi 5</li>'+
            '<li>Restart Komputer/Laptop</li>'+
            '<li>Install eRapor SMK versi 6</li>'+
            '<li>Matikan services eRaporSMKDB</li>'+
            '<li>Hapus folder database di folder C:\\eRaporSMK</li>'+
            '<li>Copy folder database hasil backup di atas dan paste di folder C:\\eRaporSMK</li>'+
            '<li>Jalankan services eRaporSMKDB</li>'+
            '<li>Buka folder C:\\eRaporSMK\\updater</li>'+
            '<li>Klik kanan file update-erapor.bat dan pilih Run as Administrator</li>'+
            '<li>Klik kanan file symlink.bat dan pilih Run as Administrator</li>'+
            '<li>Selesai</li>'+
            '</ul>',
        },
      ],
    },
    // delivery
    delivery: {
      icon: 'TerminalIcon',
      title: 'Update Aplikasi',
      subtitle: 'Permasalahan saat update aplikasi',
      qandA: [
        {
          question: 'composer update gagal',
          ans:
            '<p>Jika saat menjalankan perintah <code>git pull</code> tampil seperti gambar dibawah ini:: </p>'+
            '<p><img src="http://app.erapor-smk.net/images/composer-update.png" class="img-fluid"/></p>'+
            '<p>Silahkan download aplikasi composer <a href="https://getcomposer.org/download/" target="_blank">disini</a></p>'+
            'Tutup CMD nya kemudian buka kembali dan ulangi dari awal</p>',
        },
        {
          question: 'git pull gagal (part 1)',
          ans:
            '<p>Jika saat menjalankan perintah <code>git pull</code> tampil seperti gambar dibawah ini:: </p>'+
            '<p><img src="http://app.erapor-smk.net/images/git-pull-part-1.jpeg" class="img-fluid"/></p>'+
            '<p>Silahkan ketik ulang <code>git config --global --add safe.directory C:/eRaporSMK/dataweb</code> [enter]</p>'+
            'Kemudian ketik lagi <code>git pull</code> [enter]</p>',
        },
        {
          question: 'git pull gagal (part 2)',
          ans:
            '<p>Jika saat menjalankan perintah <code>git pull</code> tampil seperti gambar dibawah ini:: </p>'+
            '<p><img src="http://app.erapor-smk.net/images/git-pull-part-2.jpeg" class="img-fluid"/></p>'+
            '<p>Silahkan ketik <code>git stash</code> [enter]</p>'+
            '<p>Kemudian ketik lagi <code>git pull</code> [enter]</p>',
        },
        {
          question: 'git pull gagal (part 3)',
          ans:
            '<p>Jika saat menjalankan perintah <code>git pull</code> tampil seperti gambar dibawah ini:: </p>'+
            '<p><img src="http://app.erapor-smk.net/images/git-pull-part-3.jpeg" class="img-fluid"/></p>'+
            '<p>Silahkan ketik <code>git clean -df</code> [enter]</p>'+
            '<p>Kemudian ketik lagi <code>git pull</code> [enter]</p>',
        },
        {
          question: 'git pull gagal (part 4)',
          ans:
            '<p>Jika saat menjalankan perintah <code>git pull</code> tampil seperti gambar dibawah ini:: </p>'+
            '<p><img src="http://app.erapor-smk.net/images/git-pull-part-4.png" class="img-fluid"/></p>'+
            '<p>Silahkan download dulu aplikasi git melalui <a href="https://git-scm.com/download/win" target="_blank">disini</a></p>'+
            '<p>Tutup CMD nya kemudian buka kembali dan ulangi dari awal</p>',
        },
      ],
    },
    // cancellation and return
    /*cancellationReturn: {
      icon: 'RefreshCwIcon',
      title: 'Cancellation & Return',
      subtitle: 'Which license do I need?',
      qandA: [
        {
          question: 'Can my security guard or neighbour receive my shipment if I am not available?',
          ans:
            'Pastry pudding cookie toffee bonbon jujubes jujubes powder topping. Jelly beans gummi bears sweet roll bonbon muffin liquorice. Wafer lollipop sesame snaps. Brownie macaroon cookie muffin cupcake candy caramels tiramisu. Oat cake chocolate cake sweet jelly-o brownie biscuit marzipan. Jujubes donut marzipan chocolate bar. Jujubes sugar plum jelly beans tiramisu icing cheesecake.',
        },
        {
          question: 'How can I get the contact number of my delivery agent?',
          ans:
            'Sweet pie candy jelly. Sesame snaps biscuit sugar plum. Sweet roll topping fruitcake. Caramels liquorice biscuit ice cream fruitcake cotton candy tart. Donut caramels gingerbread jelly-o gingerbread pudding. Gummi bears pastry marshmallow candy canes pie. Pie apple pie carrot cake.',
        },
        {
          question: 'How can I cancel my shipment?',
          ans:
            'Tart gummies dragée lollipop fruitcake pastry oat cake. Cookie jelly jelly macaroon icing jelly beans soufflé cake sweet. Macaroon sesame snaps cheesecake tart cake sugar plum. Dessert jelly-o sweet muffin chocolate candy pie tootsie roll marzipan.',
        },
        {
          question: 'I have received a defective/damaged product. What do I do?',
          ans:
            'Cheesecake muffin cupcake dragée lemon drops tiramisu cake gummies chocolate cake. Marshmallow tart croissant. Tart dessert tiramisu marzipan lollipop lemon drops. Cake bonbon bonbon gummi bears topping jelly beans brownie jujubes muffin. Donut croissant jelly-o cake marzipan. Liquorice marzipan cookie wafer tootsie roll. Tootsie roll sweet cupcake.',
        },
        {
          question: 'How do I change my delivery address?',
          ans:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        },
        {
          question: 'What documents do I need to carry for self-collection of my shipment?',
          ans:
            'At tempor commodo ullamcorper a lacus vestibulum. Ultrices neque ornare aenean euismod. Dui vivamus arcu felis bibendum. Turpis in eu mi bibendum neque egestas congue. Nullam ac tortor vitae purus faucibus ornare suspendisse sed. Commodo viverra maecenas accumsan lacus vel facilisis volutpat est velit. Tortor consequat id porta nibh. Id aliquet lectus proin nibh nisl condimentum id venenatis a. Faucibus nisl tincidunt eget nullam non nisi. Enim nunc faucibus a pellentesque. Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus. Nec nam aliquam sem et tortor consequat id. Fringilla est ullamcorper eget nulla facilisi. Morbi tristique senectus et netus et.',
        },
        {
          question: 'What are the timings for self-collecting shipments from the Delhivery Branch?',
          ans:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Euismod lacinia at quis risus sed vulputate odio ut enim. Dictum at tempor commodo ullamcorper a lacus vestibulum.',
        },
      ],
    },
    // my orders
    myOrders: {
      icon: 'PackageIcon',
      title: 'My Orders',
      subtitle: 'Which license do I need?',
      qandA: [
        {
          question: 'Can I avail of an open delivery?',
          ans:
            'Pastry pudding cookie toffee bonbon jujubes jujubes powder topping. Jelly beans gummi bears sweet roll bonbon muffin liquorice. Wafer lollipop sesame snaps. Brownie macaroon cookie muffin cupcake candy caramels tiramisu. Oat cake chocolate cake sweet jelly-o brownie biscuit marzipan. Jujubes donut marzipan chocolate bar. Jujubes sugar plum jelly beans tiramisu icing cheesecake.',
        },
        {
          question: 'I haven’t received the refund of my returned shipment. What do I do?',
          ans:
            'Sweet pie candy jelly. Sesame snaps biscuit sugar plum. Sweet roll topping fruitcake. Caramels liquorice biscuit ice cream fruitcake cotton candy tart. Donut caramels gingerbread jelly-o gingerbread pudding. Gummi bears pastry marshmallow candy canes pie. Pie apple pie carrot cake.',
        },
        {
          question: 'How can I ship my order to an international location?',
          ans:
            'Tart gummies dragée lollipop fruitcake pastry oat cake. Cookie jelly jelly macaroon icing jelly beans soufflé cake sweet. Macaroon sesame snaps cheesecake tart cake sugar plum. Dessert jelly-o sweet muffin chocolate candy pie tootsie roll marzipan.',
        },
        {
          question: 'I missed the delivery of my order today. What should I do?',
          ans:
            'Cheesecake muffin cupcake dragée lemon drops tiramisu cake gummies chocolate cake. Marshmallow tart croissant. Tart dessert tiramisu marzipan lollipop lemon drops. Cake bonbon bonbon gummi bears topping jelly beans brownie jujubes muffin. Donut croissant jelly-o cake marzipan. Liquorice marzipan cookie wafer tootsie roll. Tootsie roll sweet cupcake.',
        },
        {
          question: 'The delivery of my order is delayed. What should I do?',
          ans:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        },
      ],
    },
    // product and services
    productServices: {
      icon: 'SettingsIcon',
      title: 'Product & Services',
      subtitle: 'Which license do I need?',
      qandA: [
        {
          question: 'How can I register a complaint against the courier executive who came to deliver my order?',
          ans:
            'Pastry pudding cookie toffee bonbon jujubes jujubes powder topping. Jelly beans gummi bears sweet roll bonbon muffin liquorice. Wafer lollipop sesame snaps. Brownie macaroon cookie muffin cupcake candy caramels tiramisu. Oat cake chocolate cake sweet jelly-o brownie biscuit marzipan. Jujubes donut marzipan chocolate bar. Jujubes sugar plum jelly beans tiramisu icing cheesecake.',
        },
        {
          question: 'The status for my shipment shows as ‘not picked up’. What do I do?',
          ans:
            'Sweet pie candy jelly. Sesame snaps biscuit sugar plum. Sweet roll topping fruitcake. Caramels liquorice biscuit ice cream fruitcake cotton candy tart. Donut caramels gingerbread jelly-o gingerbread pudding. Gummi bears pastry marshmallow candy canes pie. Pie apple pie carrot cake.',
        },
        {
          question: 'How can I get a proof of delivery for my shipment?',
          ans:
            'Tart gummies dragée lollipop fruitcake pastry oat cake. Cookie jelly jelly macaroon icing jelly beans soufflé cake sweet. Macaroon sesame snaps cheesecake tart cake sugar plum. Dessert jelly-o sweet muffin chocolate candy pie tootsie roll marzipan.',
        },
        {
          question: 'How can I avail your services?',
          ans:
            'Cheesecake muffin cupcake dragée lemon drops tiramisu cake gummies chocolate cake. Marshmallow tart croissant. Tart dessert tiramisu marzipan lollipop lemon drops. Cake bonbon bonbon gummi bears topping jelly beans brownie jujubes muffin. Donut croissant jelly-o cake marzipan. Liquorice marzipan cookie wafer tootsie roll. Tootsie roll sweet cupcake.',
        },
      ],
    },*/
  },
}

mock.onGet('/faq/data').reply(config => {
  const { q = '' } = config.params
  const queryLowered = q.toLowerCase()

  const filteredData = {}

  Object.entries(data.faqData).forEach(entry => {
    const [categoryName, categoryObj] = entry
    // eslint-disable-next-line arrow-body-style
    const filteredQAndAOfCategory = categoryObj.qandA.filter(qAndAObj => {
      return qAndAObj.question.toLowerCase().includes(queryLowered)
    })
    if (filteredQAndAOfCategory.length) {
      filteredData[categoryName] = { ...categoryObj, qandA: filteredQAndAOfCategory }
    }
  })

  return [200, filteredData]
})
