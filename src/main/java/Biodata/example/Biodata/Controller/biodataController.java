package Biodata.example.Biodata.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;


@Controller
public class biodataController {
   
    @GetMapping("/")
    public String index() {
        return "index";
    }

    @GetMapping("/portfolio")
    public String showPortfolio() {
        return "portfolio";  // ini akan merender portfolio.html dari folder templates
    }
}