import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const PageNotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Страница не найдена — 404</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <Header />
      <div className="flex-1 flex items-center justify-center bg-muted/30 py-24">
        <div className="text-center px-4">
          <h1 className="text-6xl font-bold mb-4 text-primary">404</h1>
          <p className="text-xl text-muted-foreground mb-6">Упс! Страница не найдена</p>
          <Button asChild>
            <Link to="/">Вернуться на главную</Link>
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PageNotFound;
