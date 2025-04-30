function makeCoffee() {

    console.log("☕ スタッフ：先にコーヒーを準備します...");

    return new Promise((resolve) => {

      setTimeout(() => {

        console.log("✅ コーヒーができました！");

        resolve();

      }, 2000); // 2秒

    });

  }

  //まだ関数を定義しただけ。実行はされない。同時だけど先に呼ばれてるので３番目。

  function makeSandwich() {

    console.log("🥪 スタッフ：次にサンドイッチを準備します...");

    return new Promise((resolve) => {

      setTimeout(() => {

        console.log("✅ サンドイッチができました！");

        resolve();

      }, 3000); // 3秒

    });

  }

  //まだ関数を定義しただけ。実行はされない。同時だけど後に呼ばれてるので４番目。

  async function serveCustomer() {

    await Promise.all([makeCoffee(),makeSandwich()]);

    console.log("🍽️ スタッフ：すべてできたので配膳します！"); //これが５番目。

  }

  

  console.log("🥪 お客さんがコーヒーとサンドイッチを注文しました"); //一番最初に実行されるよ！

  serveCustomer();//これが２番目、serverCustomerの関数が実行される。これはasyncのところで定義してあるのでそれが実行される。asyncとawaitがあるのでその中身の処理（makeCoffee(),makeSandwich())が終わってからの実行となりまだ出力されない状態。そしてPromise.allがあるのでそのなかの配列の関数がすべて実行されるまで待機される。