LoadFunctionLibrary "C:\Users\MatiasGonzaloMamani\Documents\Unified Functional Testing\GUITest1_Library.qfl"

realizarLogin()
RunAPITest "APITest1" ,DataTable("Username", dtGlobalSheet),DataTable("Password", dtGlobalSheet),DataTable("APITestOutput", dtGlobalSheet)
entrarCategoriaLaptops()
entrarArticuloBoseSL3()
agregarBoseSL3Carrito()
realizarPago()


