import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import Icon from '@/components/ui/icon';

const FEEDBACK_URL = 'https://functions.poehali.dev/9dc7bdce-2806-4074-b813-be29e90067c9';

interface FeedbackDialogProps {
  trigger: React.ReactNode;
  defaultSubject?: string;
  defaultMessage?: string;
}

const FeedbackDialog = ({ trigger, defaultSubject, defaultMessage }: FeedbackDialogProps) => {
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState(defaultMessage || '');

  const resetForm = () => {
    setName('');
    setEmail('');
    setPhone('');
    setMessage(defaultMessage || '');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(FEEDBACK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          phone,
          message,
          subject: defaultSubject || 'Заявка с сайта МО РПА',
        }),
      });

      if (!response.ok) {
        throw new Error('Ошибка отправки');
      }

      toast({
        title: 'Заявка отправлена!',
        description: 'Мы получили ваше сообщение и ответим в ближайшее время.',
      });
      resetForm();
      setOpen(false);
    } catch {
      toast({
        title: 'Не удалось отправить',
        description: 'Попробуйте ещё раз позже или напишите на rpa.moscow@yandex.ru',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Написать нам</DialogTitle>
          <DialogDescription>
            Заполните форму — мы получим её на почту и свяжемся с вами.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="fb-name">Ваше имя *</Label>
            <Input
              id="fb-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="fb-email">Email</Label>
            <Input
              id="fb-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="fb-phone">Телефон</Label>
            <Input
              id="fb-phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="fb-message">Сообщение *</Label>
            <Textarea
              id="fb-message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={5}
              required
            />
          </div>
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? (
              <Icon name="Loader2" className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <Icon name="Send" className="mr-2 h-4 w-4" />
            )}
            Отправить
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default FeedbackDialog;
