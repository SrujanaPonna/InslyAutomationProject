$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Signup.feature");
formatter.feature({
  "line": 1,
  "name": "Signup",
  "description": "",
  "id": "signup",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Validate the signup page",
  "description": "",
  "id": "signup;validate-the-signup-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "Browser is opened",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User navigated to signup page",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Sign up and Start Using title should be shown",
  "keyword": "Then "
});
formatter.match({
  "location": "SignupSteps.Browser_is_opened()"
});
formatter.result({
  "duration": 5833767024,
  "error_message": "org.openqa.selenium.WebDriverException: permission denied\nBuild info: version: \u00273.5.1\u0027, revision: \u00279c21bb67ef\u0027, time: \u00272017-08-17T15:26:08.955Z\u0027\nSystem info: host: \u0027DELL\u0027, ip: \u0027192.168.1.4\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_181\u0027\nDriver info: driver.version: FirefoxDriver\nremote stacktrace: \r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$new$0(W3CHandshakeResponse.java:57)\r\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$getResponseFunction$2(W3CHandshakeResponse.java:104)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$24(ProtocolHandshake.java:360)\r\n\tat java.util.stream.ReferencePipeline$3$1.accept(Unknown Source)\r\n\tat java.util.Spliterators$ArraySpliterator.tryAdvance(Unknown Source)\r\n\tat java.util.stream.ReferencePipeline.forEachWithCancel(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.copyIntoWithCancel(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.copyInto(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(Unknown Source)\r\n\tat java.util.stream.FindOps$FindOp.evaluateSequential(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.evaluate(Unknown Source)\r\n\tat java.util.stream.ReferencePipeline.findFirst(Unknown Source)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:363)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:137)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:641)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:254)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:236)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:137)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:191)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:103)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:99)\r\n\tat utilities.GenericActions.invokeBrowser(GenericActions.java:196)\r\n\tat stepDefinitions.SignupSteps.Browser_is_opened(SignupSteps.java:19)\r\n\tat ✽.Given Browser is opened(Signup.feature:5)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "SignupSteps.User_navigated_to_signup_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SignupSteps.Sign_up_and_Start_Using_title_should_be_shown()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 9,
  "name": "Complete the Company Details in Signup page",
  "description": "",
  "id": "signup;complete-the-company-details-in-signup-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "Company Details secion is available",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "User fills in the details in company section",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "insly address should get filled in automatically and other details should get filled properly as per input",
  "keyword": "Then "
});
formatter.match({
  "location": "SignupSteps.Company_Details_section_is_available()"
});
formatter.result({
  "duration": 5875052,
  "error_message": "java.lang.NullPointerException\r\n\tat utilities.GenericActions.checkCompanyDetailsExistance(GenericActions.java:244)\r\n\tat stepDefinitions.SignupSteps.Company_Details_section_is_available(SignupSteps.java:37)\r\n\tat ✽.Given Company Details secion is available(Signup.feature:11)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "SignupSteps.User_fills_in_the_details_in_company_section()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SignupSteps.insly_address_should_get_filled_in_automatically_and_other_details_should_get_filled_properly_as_per_input()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 15,
  "name": "Administrator Account Details",
  "description": "",
  "id": "signup;administrator-account-details",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 17,
  "name": "Administrator Account Details Section is available",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "User fills in all the data in administrator section",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "All the data should be filled in properly",
  "keyword": "Then "
});
formatter.match({
  "location": "SignupSteps.Administrator_Account_Details_Section_is_available()"
});
formatter.result({
  "duration": 359832,
  "error_message": "java.lang.NullPointerException\r\n\tat utilities.GenericActions.isAdministratorAccountSectionExist(GenericActions.java:323)\r\n\tat stepDefinitions.SignupSteps.Administrator_Account_Details_Section_is_available(SignupSteps.java:55)\r\n\tat ✽.Given Administrator Account Details Section is available(Signup.feature:17)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "SignupSteps.User_fills_in_all_the_data_in_administrator_section()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SignupSteps.All_the_data_should_be_filled_in_properly()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 21,
  "name": "Terms and Conditions",
  "description": "",
  "id": "signup;terms-and-conditions",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 23,
  "name": "Terms and Conditions Section is available",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "we click on terms \u0026 conditions and privacy policy as per expectation after scrolling down",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "Signup Button should get enabled",
  "keyword": "Then "
});
formatter.match({
  "location": "SignupSteps.Terms_and_Conditions_Section_is_available()"
});
formatter.result({
  "duration": 370097,
  "error_message": "java.lang.NullPointerException\r\n\tat utilities.GenericActions.isTermsConditionsSectionExist(GenericActions.java:403)\r\n\tat stepDefinitions.SignupSteps.Terms_and_Conditions_Section_is_available(SignupSteps.java:73)\r\n\tat ✽.Given Terms and Conditions Section is available(Signup.feature:23)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "SignupSteps.we_click_on_terms_conditions_and_privacy_policy_as_per_expectation_after_scrolling_down()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SignupSteps.Signup_Button_should_get_enabled()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 27,
  "name": "Signing up",
  "description": "",
  "id": "signup;signing-up",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 29,
  "name": "you click on sign up button",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "Instance creation should be created and it should start to work as expected",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "close the Browser",
  "keyword": "And "
});
formatter.match({
  "location": "SignupSteps.you_click_on_sign_up_button()"
});
formatter.result({
  "duration": 2736023585,
  "status": "passed"
});
formatter.match({
  "location": "SignupSteps.Instance_creation_should_be_created_and_it_should_start_to_work_as_expected()"
});
formatter.result({
  "duration": 30001487630,
  "error_message": "java.lang.NullPointerException\r\n\tat utilities.GenericActions.validateSignup(GenericActions.java:529)\r\n\tat stepDefinitions.SignupSteps.Instance_creation_should_be_created_and_it_should_start_to_work_as_expected(SignupSteps.java:97)\r\n\tat ✽.Then Instance creation should be created and it should start to work as expected(Signup.feature:30)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "SignupSteps.close_the_Browser()"
});
formatter.result({
  "status": "skipped"
});
});