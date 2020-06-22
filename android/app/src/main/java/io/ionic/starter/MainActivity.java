package io.ionic.starter;

import android.os.Bundle;
import android.os.Handler;
import android.widget.Toast;

import com.getcapacitor.BridgeActivity;
import com.getcapacitor.Plugin;

import java.util.ArrayList;

public class MainActivity extends BridgeActivity {

  @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);

    // Initializes the Bridge
    this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
      // Additional plugins you've installed go here
      // Ex: add(TotallyAwesomePlugin.class);
    }});
  }
  boolean doubleBackToExitPressedOnce = false;
  @Override
  public void onBackPressed()
  {
    if (doubleBackToExitPressedOnce) {

     finish();
    }
    super.onBackPressed();
    this.doubleBackToExitPressedOnce = true;
    Toast.makeText(this, "Press again to exit", Toast.LENGTH_SHORT).show();
    new Handler().postDelayed(new Runnable() {
      @Override
      public void run() {
        doubleBackToExitPressedOnce = false;
      }
    }, 2000);  // Change time interval here if you want
  }
}
