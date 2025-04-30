function makeCoffee() {

    console.log("☕ スタッフ：先にコーヒーを準備します...");

    return new Promise((resolve) => {

      setTimeout(() => {

        console.log("✅ コーヒーができました！");

        resolve();

      }, 2000); // 2秒

    });

  }

  //まだ関数を定義しただけ。実行はされない。

  function makeSandwich() {

    console.log("🥪 スタッフ：次にサンドイッチを準備します...");

    return new Promise((resolve) => {

      setTimeout(() => {

        console.log("✅ サンドイッチができました！");

        resolve();

      }, 3000); // 3秒

    });

  }

  //まだ関数を定義しただけ。実行はされない。

  async function serveCustomer() {

    await Promise.all([makeCoffee(),makeSandwich()]);

    console.log("🍽️ スタッフ：すべてできたので配膳します！");

  }

  

  console.log("🥪 お客さんがコーヒーとサンドイッチを注文しました");

  serveCustomer();