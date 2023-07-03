const firebaseAuth = require("firebase/auth");

exports.postServidor = async (req, res) => {
  try {
    const { email, password } = req.body;

    const auth = firebaseAuth.getAuth();

    firebaseAuth
      .signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in

        const user = userCredential.user;
        const token = user.stsTokenManager.accessToken;
        const verify = user.providerData;
        console.log(verify);
        //res.json({Login: true, token, verify});
        res.json({ user });
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  } catch (error) {
    console.log(error);
  }
};


